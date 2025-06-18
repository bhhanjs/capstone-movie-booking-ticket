import { Navigate, useRoutes } from "react-router-dom";
import { PATH } from "./paths";
import HomePageLayout from "@/components/layouts/home-layout";
import HomeMovieList from "@/pages/home-movie-list";
import MovieDetails from "@/pages/movie-details";
import AuthLayout from "@/components/layouts/auth-layout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import TicketPage from "@/pages/tickets";

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
        {
          path: PATH.TICKETS_ROOM,
          element: <TicketPage />,
        },
      ],
    },
    {
      path: PATH.AUTH,
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          index: true,
          element: <Navigate to={PATH.LOGIN_RELATIVE} replace />,
        },
        {
          path: PATH.LOGIN_RELATIVE,
          element: <LoginPage />,
        },
        {
          path: PATH.REGISTER_RELATIVE,
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return elements;
};

export default useRoutesElements;
