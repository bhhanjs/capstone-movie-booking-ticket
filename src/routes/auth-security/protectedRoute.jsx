import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import { PATH } from "../paths";

export default function ProtectedRoute({ children }) {
  const isUser = useSelector((state) => state.userSlice.userInfo);
  const location = useLocation();
  console.log(location);


  // useEffect(() => {
  //   if (!isUser && !showRedirectMessage) {
  //     // replace is used to replace the current entry in the browser history instead of adding a new one
  //     // return <Navigate to="/login" replace />;
  //     toast.warning("You must log in first");
  //     setShowRedirectMessage(true);
  //   }
  // }, [showRedirectMessage, isUser]);

  if (isUser === null) {
    return <Navigate to={PATH.LOGIN} replace state={{ from: location }} />;
  }

  return children;
}


/**
 * - React do not allow to call the side effect like toast directly inside the render logic - React expect the render function to be pure
 * 
 * - Ract 18+ in developement intentionally double-invokes some function (like useEffect) to help find the bugs
 * 
 * - useEffect is the correct place for SIDE EFFECT LOGIC like: showing a toast, login, fetching or modifying DOM
 */