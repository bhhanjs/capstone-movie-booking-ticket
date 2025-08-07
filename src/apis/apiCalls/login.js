import fetcher from "../fetcher";

const loginAPI = async function (data) {
  try {
    const responseAPI = await fetcher.post("/QuanLyNguoiDung/DangNhap", data);
    return responseAPI.data.content;
  } catch (error) {
    console.log("error in loginAPI:", error);
    throw error;
  }
};

export default loginAPI;
