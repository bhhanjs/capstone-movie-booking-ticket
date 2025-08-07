import fetcher from "../fetcher";
// link: /QuanLyNguoiDung/DangKy

const registerAPI = async function (data) {
  try {
    const registerdata = await fetcher.post("/QuanLyNguoiDung/DangKy", data);
    return registerdata.data.content;
  } catch (error) {
    console.log("error in registerAPI:", error);
    throw error;
  }
};

export default registerAPI;
