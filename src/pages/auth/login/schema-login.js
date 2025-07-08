import * as yup from "yup";
const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~]).{8,}$/;

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters ( 1 uppercase, 1 special character)"
    ),
});

export default schema;
