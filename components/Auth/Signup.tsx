import React, { useState } from "react";
import usePasswordType from "../../Hooks/usePasswordType";
import { AuthButton, AuthTitle } from "../AuthLayout/AuthStyle";
import { CloseEyeIcon } from "../Icon";
import InputField from "../InputField/InputField";
import SelectField from "../InputField/SelectField";

function Signup() {
  const { passwordType, changePassword } = usePasswordType();
  return (
    <form className="authForm">
      <AuthTitle>Sign Up</AuthTitle>

      <InputField
        type="email"
        label="Email address"
        placeholder="Enter you email address"
        icon={false}
        border={true}
        name="email"
      />
      <InputField
        placeholder="Enter your password"
        type={passwordType ? "text" : "password"}
        label="Password"
        icon={true}
        border={true}
        name="password"
        ic={<CloseEyeIcon onClick={changePassword} />}
      />
      <InputField
        placeholder="Enter your full name"
        type="text"
        label="Full name"
        border={true}
        name="fullName"
      />
      <SelectField
        name={"role"}
        placeholder="Text"
        type="text"
        label="What is your role"
        border={true}
      />
      <AuthButton>Sign Up</AuthButton>
    </form>
  );
}

export default Signup;
