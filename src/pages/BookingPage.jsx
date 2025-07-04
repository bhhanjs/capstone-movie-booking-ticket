import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams(); // maLichChieu
  const [roomData, setRoomData] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const res = await axios.get(
          \`https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=\${id}\`,
          {
            headers: {
              TokenCybersoft: 'YOUR_TOKEN_HERE'
            }
          }
        );
        setRoomData(res.data.content);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRoomData();
  }, [id]);

  const toggleSeat = (seat) => {
    const exists = selectedSeats.find(s => s.maGhe === seat.maGhe);
    if (exists) {
      setSelectedSeats(selectedSeats.filter(s => s.maGhe !== seat.maGhe));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = async () => {
    const danhSachVe = selectedSeats.map(seat => ({
      maGhe: seat.maGhe,
      giaVe: seat.giaVe
    }));

    const payload = {
      maLichChieu: id,
      danhSachVe
    };

    try {
      const res = await axios.post(
        'https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
        payload,
        {
          headers: {
            TokenCybersoft: 'YOUR_TOKEN_HERE',
            Authorization: 'Bearer YOUR_ACCESS_TOKEN'
          }
        }
      );
      alert('Đặt vé thành công!');
      setSelectedSeats([]);
    } catch (err) {
      console.error(err);
      alert('Đặt vé thất bại!');
    }
  };

  if (!roomData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Đặt vé: {roomData.thongTinPhim.tenPhim}</h1>
      <p>Rạp: {roomData.thongTinPhim.tenCumRap} - {roomData.thongTinPhim.tenRap}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 8 }}>
        {roomData.danhSachGhe.map((seat) => (
          <button
            key={seat.maGhe}
            onClick={() => toggleSeat(seat)}
            style={{
              padding: 6,
              backgroundColor: seat.daDat ? 'gray' : selectedSeats.some(s => s.maGhe === seat.maGhe) ? 'green' : '#eee',
              cursor: seat.daDat ? 'not-allowed' : 'pointer'
            }}
            disabled={seat.daDat}
          >
            {seat.tenGhe}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Ghế đã chọn: {selectedSeats.map(s => s.tenGhe).join(', ')}</h3>
        <button onClick={handleBooking} disabled={!selectedSeats.length}>
          Đặt vé
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
