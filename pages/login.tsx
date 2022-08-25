import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { AuthButton, AuthTitle } from "../components/AuthLayout/AuthStyle";
import InputField from "../components/InputField/InputField";
import Login from "../components/Auth/Login";

function Index() {
  return (
    <AuthLayout authPageHeight="fit-content">
      <Login />
    </AuthLayout>
  );
}

export default Index;
