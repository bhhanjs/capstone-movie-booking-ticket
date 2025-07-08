import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        }
      );
      setMovies(res.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id) => {
    if (!window.confirm('Xác nhận xoá phim?')) return;
    try {
      await axios.delete(
        \`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=\${id}\`,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        }
      );
      fetchMovies();
    } catch (err) {
      console.error(err);
      alert('Xoá phim thất bại!');
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Quản lý phim</h1>
      <button onClick={() => navigate('/admin/films/addnew')}>Thêm phim</button>
      <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên phim</th>
            <th>Hình</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.maPhim}>
              <td>{movie.maPhim}</td>
              <td>{movie.tenPhim}</td>
              <td><img src={movie.hinhAnh} alt="" width="80" /></td>
              <td>
                <button onClick={() => navigate(\`/admin/films/edit/\${movie.maPhim}\`)}>Sửa</button>
                <button onClick={() => deleteMovie(movie.maPhim)}>Xoá</button>
                <button onClick={() => navigate(\`/admin/films/showtime/\${movie.maPhim}\`)}>Tạo lịch chiếu</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
