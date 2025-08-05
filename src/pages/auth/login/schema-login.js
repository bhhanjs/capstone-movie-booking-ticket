import * as yup from "yup";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
});

export default schema;
