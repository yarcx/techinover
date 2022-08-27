import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import usePasswordType from "../Hooks/usePasswordType";
import { AuthButton, AuthTitle } from "../AuthLayout/AuthStyle";
import { CloseEyeIcon, RoundedCheckIcon, WarningIcon } from "../Icon";
import InputField from "../InputField/InputField";
import SelectField from "../InputField/SelectField";
import { USER_TYPE } from "../lib/data";
import { ISignUpInterface } from "../lib/interface";
import { signUpSchema } from "../lib/validationSchemas";
import { useSnackbar } from "../Hooks/useSnackbar";
import { SignUserUp } from "../Services/api";

function Signup() {
  const [creatingANewUser, setCreatingANewUser] = useState(false);
  const { passwordType, changePassword } = usePasswordType();
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar();
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpInterface>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp: SubmitHandler<ISignUpInterface> = async (data: ISignUpInterface) => {
    if (creatingANewUser) {
      return;
    }
    setCreatingANewUser(true);
    try {
      const res = await SignUserUp(data);
      setCreatingANewUser(false);
      if (res.status === 201) {
        showSuccessSnackbar("Sign up was successful", {
          position: "top-center",
          style: { color: "#FFFFFF", backgroundColor: "#1B9B65" },
          icon: <RoundedCheckIcon color="#FFFFFF" />,
        });
        // redirect the user to login page once the snackbar comes up
        return push("/login");
      }
    } catch (error: any) {
      setCreatingANewUser(false);
      if (error.name === "AxiosError") {
        return showErrorSnackbar(error?.response?.data?.message || error?.message, {
          position: "top-center",
          style: { color: "white", backgroundColor: "red" },
          icon: <WarningIcon color="#FFFFFF" />,
        });
      }
      console.log(error, "there was an error while trying to log you in");
      return showErrorSnackbar("sign up failed, Something went wrong");
    }
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
      <AuthButton loading={creatingANewUser}>
        {creatingANewUser ? "Loading..." : "Sign Up"}
      </AuthButton>
    </form>
  );
}

export default Signup;
