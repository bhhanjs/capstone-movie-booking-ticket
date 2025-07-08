import fetcher from "../fetcher";

const ticketRoom = async function (data) {
  try {
    const ticketRoomData = await fetcher.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      data
    );
    console.log(ticketRoomData)
    return ticketRoomData.data
  } catch (error) {
    console.log("ticketRoom error:", error)
    throw error
  }
};

export default ticketRoom;
