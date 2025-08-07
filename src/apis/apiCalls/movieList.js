import fetcher from "../fetcher";

const movieListAPI = async function () {
  try {
    const response = await fetcher.get(
      "/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10"
    );
    return response.data.content.items;
  } catch (error) {
    console.log("error in movieListAPI:", error);
    throw error;
  }
};

export default movieListAPI;
