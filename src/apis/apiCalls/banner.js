import fetcher from "../fetcher";

const bannerAPI = async function () {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data.content;
  } catch (error) {
    console.log("banner api error:", error);
    throw error;
  }
};

export default bannerAPI;
