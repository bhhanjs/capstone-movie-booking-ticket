import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditFilm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [hinhAnh, setHinhAnh] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const res = await axios.get(
          \`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=\${id}\`,
          {
            headers: {
              TokenCybersoft: 'YOUR_TOKEN_HERE'
            }
          }
        );
        setForm({ ...res.data.content, maNhom: 'GP01' });
      } catch (err) {
        console.error(err);
      }
    };
    fetchFilm();
  }, [id]);

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
        'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
        formData,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      alert('Cập nhật phim thành công!');
    } catch (err) {
      console.error(err);
      alert('Cập nhật thất bại!');
    }
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div>
      <h1>Chỉnh sửa phim</h1>
      <form onSubmit={handleSubmit}>
        <input name="tenPhim" value={form.tenPhim} placeholder="Tên phim" onChange={handleChange} required />
        <input name="trailer" value={form.trailer} placeholder="Trailer" onChange={handleChange} required />
        <input name="moTa" value={form.moTa} placeholder="Mô tả" onChange={handleChange} required />
        <input name="ngayKhoiChieu" type="date" value={form.ngayKhoiChieu} onChange={handleChange} required />
        <input name="danhGia" type="number" value={form.danhGia} onChange={handleChange} />
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
        <input type="file" onChange={handleImage} accept="image/*" />
        <button type="submit">Cập nhật phim</button>
      </form>
    </div>
  );
};

export default EditFilm;
