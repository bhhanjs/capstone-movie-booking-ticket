import * as yup from "yup";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
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
  hoTen: yup.string().required("Họ tên không được để trống"),
  email: yup
    .string()
    .required("Email không hợp lệ")
    .matches(EMAIL_REGEX, "Email không hợp lệ"),
  soDt: yup
    .string()
    .required("Số điện thoại không được để trống")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  maNhom: yup.string().required("Mã nhóm không được để trống"),
  checkbox: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
  matKhau_confirm: yup
    .string()
    .oneOf([yup.ref("matKhau"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default schema;
