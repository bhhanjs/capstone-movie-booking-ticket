import { fetcher } from "../fetcher";

export const movieListAPI = async function (data) {
  // data: { maNhom: "GP01"}
  // => https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01
  try {
    const responseAPI = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
      params: data,
    });
    console.log(responseAPI);

    return responseAPI.data.content;
  } catch (error) {
    console.log("error in movieListAPI:", error);
    throw error
  }
};
