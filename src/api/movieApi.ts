
import axiosClient from './axiosClient';

export const movieApi = {
  getMovies: (groupId = import.meta.env.VITE_API_GROUP) =>
    axiosClient.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupId}`),
};
