import fetcher from "../fetcher";

const loginAPI = async function (data) {
  try {
    const responseAPI = await fetcher.post("/QuanLyNguoiDung/DangNhap", data);
    console.log(responseAPI);
    console.log(responseAPI.data.content);
    return responseAPI.data.content;
  } catch (error) {
    console.log("error in loginAPI:", error);
    throw error;
  }
};

export default loginAPI;
