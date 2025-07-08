import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await axios.get(
          `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
          {
            headers: {
              TokenCybersoft: 'YOUR_TOKEN_HERE'
            }
          }
        );
        setMovieDetail(res.data.content);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movieDetail) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movieDetail.tenPhim}</h1>
      <img src={movieDetail.hinhAnh} alt={movieDetail.tenPhim} style={{ width: 300 }} />
      <p>{movieDetail.moTa}</p>

      <h2>Lịch chiếu</h2>
      {movieDetail.heThongRapChieu.map((heThong) => (
        <div key={heThong.maHeThongRap} style={{ marginBottom: 20 }}>
          <h3>{heThong.tenHeThongRap}</h3>
          {heThong.cumRapChieu.map((cumRap) => (
            <div key={cumRap.maCumRap} style={{ marginLeft: 20 }}>
              <h4>{cumRap.tenCumRap}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cumRap.lichChieuPhim.map((lichChieu) => (
                  <Link
                    key={lichChieu.maLichChieu}
                    to={`/ticketroom/${lichChieu.maLichChieu}`}
                    style={{ border: '1px solid #ccc', padding: '5px 10px' }}
                  >
                    {lichChieu.ngayChieuGioChieu}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieDetail;
