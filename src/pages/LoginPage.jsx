import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [form, setForm] = useState({ taiKhoan: '', matKhau: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        form,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE'
          }
        }
      );
      localStorage.setItem('accessToken', res.data.content.accessToken);
      alert('Đăng nhập thành công!');
    } catch (err) {
      console.error(err);
      alert('Đăng nhập thất bại!');
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <input name="taiKhoan" placeholder="Tài khoản" onChange={handleChange} required />
        <input name="matKhau" placeholder="Mật khẩu" type="password" onChange={handleChange} required />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginPage;
