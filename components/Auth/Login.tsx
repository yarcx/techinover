import React, { useState } from "react";
import usePasswordType from "../../Hooks/usePasswordType";
import { AuthButton, AuthTitle } from "../AuthLayout/AuthStyle";
import { CloseEyeIcon } from "../Icon";
import InputField from "../InputField/InputField";

function Index() {
  const { passwordType, changePassword } = usePasswordType();
  return (
    <form className="authForm">
      <AuthTitle>Login</AuthTitle>

      <InputField name="email" icon={false}></InputField>
      <InputField
        placeholder="Enter your password"
        type={passwordType ? "text" : "password"}
        label="Password"
        icon={true}
        border={false}
        name="password"
        ic={<CloseEyeIcon onClick={changePassword} />}
      />

      <AuthButton>Log in</AuthButton>
    </form>
  );
}

export default Index;
