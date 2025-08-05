import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "@/store/slices/user";
import { PATH } from "../paths";

const InactiveAutoLogout = function ({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timerIdRef = useRef(null);
  const logoutTime = 30 * 60 * 1000; // 30 mins

  // handle log out
  const handleLogout = useCallback(
    function () {
      dispatch(logOutUser());
      alert("You were logged out due to inactivity");
      navigate(PATH.LOGIN);
    },
    [dispatch, navigate]
  );

  // handle reset timer
  const resetTimer = useCallback(
    function () {
      if (timerIdRef.current) clearTimeout(timerIdRef.current);
      timerIdRef.current = setTimeout(handleLogout, logoutTime);
    },
    [handleLogout, logoutTime]
  );

  useEffect(() => {
    // start the timer on mount
    resetTimer();

    // reset timer for each event
    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // clean up the effect logic before
    return () => {
      if (timerIdRef.current) clearTimeout(timerIdRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [resetTimer]);

  // because it is a component jsx, so it need to return something
  return children;
};
export default InactiveAutoLogout;

/** What it does:
 * - Listening for the user actions: mouse move, key press, etc.
 * - Reset a timer for each action: a function
 * + First clean the previous timer
 * + Second create another timer
 * - If no activity for 30 mins:
 * + Logs the user out
 * + Clean the redux store data, localstorage
 * + Redirect to login
 *
 */

/** Why using the component wrapping pattern:
 * - Because it let to add LOGIC AROUND ANY COMPONENT - like a shell - WITHOUT CHANGE the original component
 * + <ProtectedRoute>	Only show child if user is logged in
 * + <InactiveAutoLogout>	Add inactivity timer
 * + <ThemeProvider>	Provide theme to all children
 * + <Layout>	Add common header/footer
 *
 */
