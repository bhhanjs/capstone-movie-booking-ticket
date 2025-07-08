import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [banners, setBanners] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerRes = await axios.get(
          'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
          {
            headers: {
              TokenCybersoft: 'YOUR_TOKEN_HERE'
            }
          }
        );
        setBanners(bannerRes.data.content);

        const movieRes = await axios.get(
          'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
          {
            headers: {
              TokenCybersoft: 'YOUR_TOKEN_HERE'
            }
          }
        );
        setMovies(movieRes.data.content);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trang chủ</h1>

      <Carousel autoplay>
        {banners.map((banner) => (
          <div key={banner.maBanner}>
            <img src={banner.hinhAnh} alt={banner.maBanner} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        ))}
      </Carousel>

      <h2>Danh sách phim</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {movies.map((movie) => (
          <div key={movie.maPhim} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
            <img src={movie.hinhAnh} alt={movie.tenPhim} style={{ width: '100%' }} />
            <h4>{movie.tenPhim}</h4>
            <p>{movie.moTa.substring(0, 50)}...</p>
            <Link to={`/detail/${movie.maPhim}`}>Đặt vé</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
