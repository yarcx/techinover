import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { AuthButton, AuthTitle } from "../components/AuthLayout/AuthStyle";

function Signup() {
  return (
    <AuthLayout>
      <form className="authForm">
        <AuthTitle>Sign Up</AuthTitle>

        <AuthButton>Sign Up</AuthButton>
      </form>
    </AuthLayout>
  );
}

export default Signup;
