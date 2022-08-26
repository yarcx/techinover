import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import usePasswordType from "../Hooks/usePasswordType";
import { AuthButton, AuthTitle } from "../AuthLayout/AuthStyle";
import { CloseEyeIcon } from "../Icon";
import InputField from "../InputField/InputField";
import { ILoginFormInputs } from "../lib/interface";
import { loginSchema } from "../lib/validationSchemas";

function Index() {
  const { passwordType, changePassword } = usePasswordType();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = (data: ILoginFormInputs) => {
    console.log(data);
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

      <AuthButton>Log in</AuthButton>
    </form>
  );
}

export default Index;
