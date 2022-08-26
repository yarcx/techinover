import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import usePasswordType from "../Hooks/usePasswordType";
import { AuthButton, AuthTitle } from "../AuthLayout/AuthStyle";
import { CloseEyeIcon } from "../Icon";
import InputField from "../InputField/InputField";
import { ILoginFormInputs, IUserDetailsRes } from "../lib/interface";
import { loginSchema } from "../lib/validationSchemas";
import { useSnackbar } from "../Hooks/useSnackbar";
import { LogUserIn } from "../Services/api";
import { useRouter } from "next/router";

function Index() {
  const [tryingToLogIn, seTryingToLogIn] = useState(false);
  const { passwordType, changePassword } = usePasswordType();
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = async (data: ILoginFormInputs) => {
    if (tryingToLogIn) {
      return;
    }
    seTryingToLogIn(true);
    try {
      let res = await LogUserIn(data);
      if (res.data as IUserDetailsRes) {
        seTryingToLogIn(false);
        localStorage.setItem("fullName", res.data.fullName);
        document.cookie = `id=${res.data._id}`;
        push("/dashboard");
      }
      showSuccessSnackbar("Youve logged in succesfully");
    } catch (error: any) {
      seTryingToLogIn(false);
      if (error?.name === "AxiosError") {
        return showErrorSnackbar(error?.response?.data?.message || error?.message);
      }
      console.log(error.response, "error trying to login");
      showErrorSnackbar("Login Failed, Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="authForm">
      <AuthTitle>Login</AuthTitle>

      <InputField
        name="email"
        type="email"
        label="Email address"
        placeholder="Enter your email address"
        icon={false}
        errors={errors}
        register={register}
      />
      <InputField
        placeholder="Enter your password"
        type={passwordType ? "text" : "password"}
        label="Password"
        icon={true}
        border={false}
        name="password"
        ic={<CloseEyeIcon onClick={changePassword} />}
        errors={errors}
        register={register}
      />

      <AuthButton loading={tryingToLogIn}>{tryingToLogIn ? "Loading..." : "Log in"}</AuthButton>
    </form>
  );
}

export default Index;
