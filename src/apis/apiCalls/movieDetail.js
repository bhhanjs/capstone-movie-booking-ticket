import fetcher from "../fetcher";

const movieDetailApi = async function (maPhim) {
  try {
    const response = await fetcher.get(
      `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
    return response.data.content;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export default movieDetailApi;
