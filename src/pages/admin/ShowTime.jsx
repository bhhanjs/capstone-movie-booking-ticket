import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowTime = () => {
  const { id } = useParams(); // maPhim
  const [heThongRap, setHeThongRap] = useState([]);
  const [cumRap, setCumRap] = useState([]);
  const [form, setForm] = useState({
    maRap: '',
    ngayChieuGioChieu: '',
    giaVe: '',
    maPhim: id
  });

  useEffect(() => {
    const fetchHeThongRap = async () => {
      const res = await axios.get(
        'https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE'
          }
        }
      );
      setHeThongRap(res.data.content);
    };
    fetchHeThongRap();
  }, []);

  const handleSelectHeThong = async (e) => {
    const maHeThong = e.target.value;
    const res = await axios.get(
      \`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=\${maHeThong}\`,
      {
        headers: {
          TokenCybersoft: 'YOUR_TOKEN_HERE'
        }
      }
    );
    const rapList = res.data.content.flatMap(cr => cr.danhSachRap);
    setCumRap(rapList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
        form,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        }
      );
      alert('Tạo lịch chiếu thành công!');
    } catch (err) {
      console.error(err);
      alert('Tạo lịch chiếu thất bại!');
    }
  };

  return (
    <div>
      <h1>Tạo lịch chiếu phim</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelectHeThong} defaultValue="">
          <option value="" disabled>Chọn hệ thống rạp</option>
          {heThongRap.map((htr) => (
            <option key={htr.maHeThongRap} value={htr.maHeThongRap}>
              {htr.tenHeThongRap}
            </option>
          ))}
        </select>

        <select name="maRap" onChange={handleChange} defaultValue="">
          <option value="" disabled>Chọn rạp</option>
          {cumRap.map((rap) => (
            <option key={rap.maRap} value={rap.maRap}>
              {rap.tenRap}
            </option>
          ))}
        </select>

        <input
          type="datetime-local"
          name="ngayChieuGioChieu"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="giaVe"
          placeholder="Giá vé"
          onChange={handleChange}
          required
        />
        <button type="submit">Tạo lịch chiếu</button>
      </form>
    </div>
  );
};

export default ShowTime;
