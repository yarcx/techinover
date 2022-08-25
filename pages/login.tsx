import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { AuthButton, AuthTitle } from "../components/AuthLayout/AuthStyle";
import InputField from "../components/InputField/InputField";

function Login() {
  return (
    <AuthLayout authPageHeight="40vh">
      <form className="authForm">
        <AuthTitle>Login</AuthTitle>

        <InputField icon={false}></InputField>
        <InputField placeholder="Enter your password" type="password" label="Password" />

        <AuthButton>Log in</AuthButton>
      </form>
    </AuthLayout>
  );
}

export default Login;
