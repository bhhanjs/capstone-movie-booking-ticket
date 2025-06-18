import fetcher from "../fetcher";

export const loginAPI = async function (data) {
  try {
    const responseAPI = await fetcher.post("/QuanLyNguoiDung/DangNhap", data);
    console.log(responseAPI);

    return responseAPI.data.content;
  } catch (error) {
    console.log("error in loginAPI:", error);
    throw error
  }
};
