import { useRoutes } from "react-router-dom";
import { PATH } from "./paths";
import HomePageLayout from "@/components/layouts/home-layout";
import HomeMovieList from "@/pages/home-movie-list";
import MovieDetails from "@/pages/movie-details";
import AuthLayout from "@/components/layouts/auth-layout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import TicketPage from "@/pages/tickets";
import ProtectedRoute from "./auth-security/protectedRoute";
import InactiveAutoLogout from "./auth-security/inactive-auto-logout";
import NotFound from "@/pages/not-found";

const useRoutesElements = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <HomePageLayout></HomePageLayout>,
      children: [
        {
          index: true,
          element: <HomeMovieList />,
        },
        {
          path: PATH.MOVIE_DETAILS,
          element: <MovieDetails />,
        },
      ],
    },
    {
      path: PATH.TICKETS_ROOM,
      element: (
        <ProtectedRoute>
          <InactiveAutoLogout>
            <TicketPage />
          </InactiveAutoLogout>
        </ProtectedRoute>
      ),
    },
    {
      // path: "",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: PATH.LOGIN,
          element: <LoginPage />,
        },
        {
          path: PATH.REGISTER,
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: PATH.NOT_FOUND,
      element: <NotFound />,
    },
  ]);

  return elements;
};

export default useRoutesElements;
