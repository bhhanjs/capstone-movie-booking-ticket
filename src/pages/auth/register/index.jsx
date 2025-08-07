import { Button } from "@/components/ui/button";
import { CheckboxCustom } from "@/components/ui/checkbox";
import { InputCustom } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import schema from "./chema-register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import registerAPI from "@/apis/apiCalls/register";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  // React hook form + yup
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      matKhau_confirm: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
      checkbox: false,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // tanstack query
  const registerMutation = useMutation({
    mutationFn: (data) => {
      return registerAPI(data);
    },
  });

  const onSubmit = function (formData) {
    // console.log(formData);
    const data = {
      taiKhoan: formData.taiKhoan,
      matKhau: formData.matKhau,
      email: formData.email,
      soDt: formData.soDt,
      maNhom: formData.maNhom,
      hoTen: formData.hoTen,
    };

    // console.log(data);
    registerMutation.mutate(data, {
      onSuccess() {
        // console.log("tanstack register: success");
        toast.success("Register successful!");
        navigate("/login");
        reset();
      },
      onError() {
        console.log("tanstack register: error");
        toast.error("Register failed. Please try again.");
      },
    });
  };

  // UI JSX
  return (
    <main>
      <Toaster richColors position="top-right" />
      <div className="register__container section__container">
        <div className="register__content mx-auto w-10/12  md:w-8/12 py-16">
          {/* header */}
          <div className="register__header flex flex-col justify-center items-center space-y-6 text-center px-3 border__bottom">
            <h1 className="text-yama-dark-gray text-5xl capitalize ">
              Join Yamagata
            </h1>
            <p>
              It is free and easy to join! Members receive a 10% reward on
              virtually every purchase. Redeem rewards in theater, on our
              website or mobile app and take advantage of special offers. Once
              complete, an email confirming your account registration will be
              sent to the email address provided.
            </p>
            <p>
              Trying to register a Starpass card you received in theater? <br />{" "}
              Please contact Yamagata@Yamagata.com and provide the card number
              for assistance.
            </p>
          </div>
          {/* FORM */}
          <form
            action=""
            className="register__form pt-18 space-y-18"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* contact information */}
            <div className="register__contact__infor border__bottom">
              <div className="register__title">
                <h2 className="title">Contact Information</h2>
                <p className="text-yama-light-gray">
                  All fields are required to complete registration
                </p>
              </div>
              <div className="register__contact__infor__content grid grid-cols-1 md:grid-cols-2 gap-7 ">
                <div className="form__group">
                  <Label htmlFor="hoTen">Name</Label>
                  <Controller
                    control={control}
                    name="hoTen"
                    render={({ field, formState: { errors } }) => (
                      <InputCustom
                        {...field}
                        error={errors.hoTen?.message}
                        className="input"
                      />
                    )}
                  />
                </div>
                <div className="form__group">
                  <Label htmlFor="taiKhoan">Account</Label>
                  <Controller
                    control={control}
                    name="taiKhoan"
                    render={({ field, formState: { errors } }) => (
                      <InputCustom
                        {...field}
                        error={errors.taiKhoan?.message}
                        className="input"
                      />
                    )}
                  />
                </div>
                <div className="form__group">
                  <Label htmlFor="email">Email</Label>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field, formState: { errors } }) => (
                      <InputCustom
                        {...field}
                        error={errors.email?.message}
                        className="input"
                      />
                    )}
                  />
                </div>
                <div className="form__group">
                  <Label htmlFor="soDt">Phone number</Label>
                  <Controller
                    control={control}
                    name="soDt"
                    render={({ field, formState: { errors } }) => (
                      <InputCustom
                        {...field}
                        error={errors.soDt?.message}
                        className="input"
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {/*  preferred theater */}
            <div className="register__theater border__bottom">
              <div className="register__title">
                <h2 className="title">Pefereed Theater</h2>
              </div>
              <div className="register__theater__content flex justify-center items-center">
                <div className="form__group">
                  <Label htmlFor="maNhom">Prefereed theater</Label>
                  <Controller
                    control={control}
                    name="maNhom"
                    render={({ field }) => (
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="input w-sm">
                          <SelectValue placeholder="Prefered theater" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GP01">GP01</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <div>
                    {errors.maNhom ? (
                      <p className="text-red-500 text-sm absolute">
                        {errors.maNhom.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* create passwords */}
            <div className="register__passwords border__bottom">
              <div className="register__title">
                <h2 className="title">Create Password</h2>
                <p className="text-yama-light-gray">
                  Password must contain at least 3 characters of different types
                  (lowercase, uppercase, number or character) and be at least 7
                  characters in length.
                </p>
              </div>
              <div className="register__passwords__content grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form__group">
                  <Label htmlFor="matKhau">Password</Label>
                  <Controller
                    control={control}
                    name="matKhau"
                    render={({ field, formState: { errors } }) => (
                      <InputCustom
                        {...field}
                        error={errors.matKhau?.message}
                        className="input"
                      />
                    )}
                  />
                </div>
                <div className="form__group">
                  <Label htmlFor="matKhau_confirm">Conform passwords</Label>
                  <Controller
                    control={control}
                    name="matKhau_confirm"
                    render={({ field, formState: { errors } }) => (
                      <InputCustom
                        {...field}
                        error={errors.matKhau_confirm?.message}
                        className="input"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* checbox */}
            <div className="register__checkbox ">
              <Controller
                control={control}
                name="checkbox"
                defaultValue={false} // 👈 Ensure it's controlled
                render={({ field }) => (
                  <CheckboxCustom
                    checked={field.value} // 👈 controlled boolean
                    onCheckedChange={field.onChange}
                  />
                )}
              />

              <Label htmlFor="checkbox">
                I agree to the Terms and conditions of the Rewards program
              </Label>
              <span className="text-red-500 text-sm absolute">
                {errors.checkbox ? `${errors.checkbox.message}` : ""}
              </span>
            </div>
            {/* button */}
            <div className="register__button flex justify-center items-center ">
              <Button
                type="submit"
                disabled={!isValid}
                className="bg-yama-main-green h-12 px-12 hover:bg-yama-main-green hover:opacity-70 transition-all duration-300 ease-[cubic-bezier(1,.4,.5,1)] cursor-pointer"
                size="lg"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
