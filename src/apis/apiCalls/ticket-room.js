import fetcher from "../fetcher";

const ticketRoomAPI = async function (maLichChieu) {
  try {
    const ticketRoomData = await fetcher.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    return ticketRoomData.data.content;
  } catch (error) {
    console.log("ticketRoom error:", error);
    throw error;
  }
};

export default ticketRoomAPI;
