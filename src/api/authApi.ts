
import axiosClient from './axiosClient';

export const authApi = {
  login: (data: { taiKhoan: string; matKhau: string }) =>
    axiosClient.post('/api/QuanLyNguoiDung/DangNhap', data),
  register: (data: any) => axiosClient.post('/api/QuanLyNguoiDung/DangKy', data),
};
