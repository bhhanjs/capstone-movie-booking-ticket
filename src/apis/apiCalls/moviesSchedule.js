import fetcher from "../fetcher";

const moviesScheduleApi = async function () {
  try {
    const response = await fetcher.get(
      "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
    );
    return response.data.content;
  } catch (error) {
    console.log("Error fetching movie schedule data:", error);
    throw error;
  }
};

export default moviesScheduleApi;
