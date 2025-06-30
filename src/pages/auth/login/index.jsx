import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { InputCustom } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  return (
    <>
      <main>
        <div className="login__container section__container">
          <div className="login__content mx-auto w-10/12  md:w-8/12 py-16">
            <div className="login__header flex flex-col justify-center items-center space-y-6 text-center px-3 pt-9 pb-15 ">
              <h1 className="text-yama-dark-gray text-5xl capitalize ">
                Welcome to Yamagata
              </h1>
              <p>Please enter your details</p>
            </div>
            <div className="login__form mx-10  md:w-8/12 md:mx-auto ">
              <form action="">
                <div className="login__form__content space-y-7">
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
                    <Label htmlFor=" matKhau">Password</Label>
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
                </div>

                <div className="flex justify-center items-center py-7 mt-12">
                  <Button
                    type="submit"
                    className="bg-yama-main-green h-12 px-12 hover:bg-yama-main-green hover:opacity-70 transition-all duration-300 ease-[cubic-bezier(1,.4,.5,1)]"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
