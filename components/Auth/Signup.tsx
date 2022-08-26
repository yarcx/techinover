import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import usePasswordType from "../Hooks/usePasswordType";
import { AuthButton, AuthTitle } from "../AuthLayout/AuthStyle";
import { CloseEyeIcon } from "../Icon";
import InputField from "../InputField/InputField";
import SelectField from "../InputField/SelectField";
import { USER_TYPE } from "../lib/data";
import { ISignUpInterface } from "../lib/interface";
import { signUpSchema } from "../lib/validationSchemas";

function Signup() {
  const { passwordType, changePassword } = usePasswordType();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpInterface>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp: SubmitHandler<ISignUpInterface> = async (data) => {
    console.log(data, "trying to sign up");
  };
  return (
    <form className="authForm" onSubmit={handleSubmit(handleSignUp)}>
      <AuthTitle>Sign Up</AuthTitle>

      <InputField
        type="email"
        label="Email address"
        placeholder="Enter you email address"
        icon={false}
        border={true}
        name="email"
        errors={errors}
        register={register}
      />
      <InputField
        placeholder="Enter your password"
        type={passwordType ? "text" : "password"}
        label="Password"
        icon={true}
        border={true}
        name="password"
        errors={errors}
        register={register}
        ic={<CloseEyeIcon onClick={changePassword} />}
      />
      <InputField
        placeholder="Enter your full name"
        type="text"
        label="Full name"
        border={true}
        name="fullName"
        register={register}
        errors={errors}
      />
      <SelectField
        name="userType"
        placeholder="Text"
        label="What is your role"
        border={true}
        options={USER_TYPE}
        errors={errors}
        register={register}
      />
      <AuthButton>Sign Up</AuthButton>
    </form>
  );
}

export default Signup;
