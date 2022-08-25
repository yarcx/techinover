import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Signup from "../components/Auth/Signup";

function Index() {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}

export default Index;
