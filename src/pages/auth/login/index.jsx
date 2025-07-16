import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { InputCustom } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import schema from "./schema-login";
import { yupResolver } from "@hookform/resolvers/yup";
import loginAPI from "@/apis/apiCalls/login";
import { useMutation } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/user";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (from !== "/" && !showRedirectMessage) {
      toast.info("You must login first");
      setShowRedirectMessage(true);
    }
  }, [from, showRedirectMessage]);

  // react hook form
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid, errors);

  // tanstack query
  const loginMutation = useMutation({
    mutationFn: (data) => {
      return loginAPI(data);
    },
    onSuccess: (response) => {
      console.log("tanstack login: success");
      toast.success("Login successful!");
      console.log(response);

      // store user data in the redux store
      dispatch(setUser(response));

      reset();
      navigate(from, { replace: true });
    },
    onError: () => {
      console.log("tanstack login: error");
      toast.error("Login failed. Please try again.");
    },
  });

  const onSubmit = function (formData) {
    console.log(formData);

    loginMutation.mutate(formData);
  };

  return (
    <>
      <main>
        <Toaster position="top-right" offset={120} />
        <div className="login__container section__container">
          <div className="login__content mx-auto w-10/12  md:w-8/12 py-16">
            <div className="login__header flex flex-col justify-center items-center space-y-6 text-center px-3 pt-9 pb-15 ">
              <h1 className="text-yama-dark-gray text-5xl capitalize ">
                Welcome to Yamagata
              </h1>
              <p>Please enter your details</p>
            </div>
            <div className="login__form mx-10  md:w-8/12 md:mx-auto ">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                    disabled={!isValid}
                    className="bg-yama-main-green h-12 px-12 hover:bg-yama-main-green hover:opacity-70 transition-all duration-300 ease-[cubic-bezier(1,.4,.5,1)] cursor-pointer"
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
