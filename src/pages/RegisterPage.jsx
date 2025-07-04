import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [form, setForm] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    hoTen: '',
    maNhom: 'GP01'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
        form,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE'
          }
        }
      );
      alert('Đăng ký thành công!');
    } catch (err) {
      console.error(err);
      alert('Đăng ký thất bại!');
    }
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <input name="taiKhoan" placeholder="Tài khoản" onChange={handleChange} required />
        <input name="matKhau" type="password" placeholder="Mật khẩu" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="soDt" placeholder="Số điện thoại" onChange={handleChange} required />
        <input name="hoTen" placeholder="Họ tên" onChange={handleChange} required />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default RegisterPage;
