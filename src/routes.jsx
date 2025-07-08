
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import TicketRoomPage from './pages/TicketRoomPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
// Admin pages could be added here

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:movieId" element={<MovieDetailPage />} />
      <Route path="/ticketroom/:showtimeId" element={<TicketRoomPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
