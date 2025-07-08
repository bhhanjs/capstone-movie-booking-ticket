import React, { useState } from 'react';
import axios from 'axios';

const AddFilm = () => {
  const [form, setForm] = useState({
    tenPhim: '',
    trailer: '',
    moTa: '',
    maNhom: 'GP01',
    ngayKhoiChieu: '',
    sapChieu: true,
    dangChieu: true,
    hot: true,
    danhGia: 10
  });
  const [hinhAnh, setHinhAnh] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleImage = (e) => {
    setHinhAnh(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    if (hinhAnh) {
      formData.append('File', hinhAnh, hinhAnh.name);
    }

    try {
      await axios.post(
        'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
        formData,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      alert('Thêm phim thành công!');
    } catch (err) {
      console.error(err);
      alert('Thêm phim thất bại!');
    }
  };

  return (
    <div>
      <h1>Thêm phim mới</h1>
      <form onSubmit={handleSubmit}>
        <input name="tenPhim" placeholder="Tên phim" onChange={handleChange} required />
        <input name="trailer" placeholder="Trailer" onChange={handleChange} required />
        <input name="moTa" placeholder="Mô tả" onChange={handleChange} required />
        <input name="ngayKhoiChieu" type="date" onChange={handleChange} required />
        <input name="danhGia" type="number" onChange={handleChange} defaultValue={10} />
        <label>
          <input type="checkbox" name="sapChieu" checked={form.sapChieu} onChange={handleChange} />
          Sắp chiếu
        </label>
        <label>
          <input type="checkbox" name="dangChieu" checked={form.dangChieu} onChange={handleChange} />
          Đang chiếu
        </label>
        <label>
          <input type="checkbox" name="hot" checked={form.hot} onChange={handleChange} />
          Hot
        </label>
        <input type="file" onChange={handleImage} accept="image/*" required />
        <button type="submit">Thêm phim</button>
      </form>
    </div>
  );
};

export default AddFilm;
