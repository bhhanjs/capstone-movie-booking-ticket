
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import RoutesConfig from './routes';

export default function App() {
  return (
    <>
      <Navbar />
      <RoutesConfig />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />
    </>
  );
}
