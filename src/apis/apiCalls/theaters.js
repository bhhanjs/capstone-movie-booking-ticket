import fetcher from "../fetcher";

const theatersApi = async function () {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap");
    return response.data.content;
  } catch (error) {
    console.log("Error fetching theaters data:", error);
    throw error;
  }
};

export default theatersApi;
