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

export default function RegisterPage() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    mode: "onChange",
  });

  const onSubmit = function (formData) {
    console.log(formData);
  };

  return (
    <main>
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
              <div className="register__contact__infor__content grid grid-cols-1 md:grid-cols-2 gap-6 ">
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
                      <Select value={field.value} onChange={field.onChange}>
                        <SelectTrigger className="input w-sm">
                          <SelectValue placeholder="Prefered theater" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GP01">GP01</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
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
                render={({ field, formState: { errors } }) => (
                  <CheckboxCustom
                    value={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="checkbox">
                I agree to the Terms and conditions of the Rewards program
              </Label>
            </div>
            {/* button */}
            <div className="register__button flex justify-center items-center ">
              <Button
                type="submit"
                className="bg-yama-main-green h-12 px-12 hover:bg-yama-main-green hover:opacity-70 transition-all duration-300 ease-[cubic-bezier(1,.4,.5,1)] "
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
