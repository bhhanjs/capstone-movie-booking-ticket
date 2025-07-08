
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

export default function Navbar() {
  const { user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="text-xl font-bold">🎬 MovieBook</Link>
        <ul className="flex gap-4">
          <li><NavLink to="/" className={({isActive})=>isActive?'text-orange-400':''}>Trang chủ</NavLink></li>
          {user ? (
            <>
              <li><NavLink to="/profile">Xin chào, {user.hoTen}</NavLink></li>
              <li><button onClick={()=>dispatch(logout())}>Đăng xuất</button></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">Đăng nhập</NavLink></li>
              <li><NavLink to="/register">Đăng ký</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
