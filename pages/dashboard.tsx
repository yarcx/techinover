import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { AuthButton } from "../components/AuthLayout/AuthStyle";

const Dashboard: NextPage = () => {
  const [fullName, setfullName] = useState<string | null>();
  const [loginUserOut, setLoginUserOut] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const retrievedUser = localStorage.getItem("fullName");
    setfullName(retrievedUser);
  }, []);

  function logUserOut() {
    if (loginUserOut) {
      return;
    }
    setLoginUserOut(true);
    localStorage.removeItem("fullName");
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setTimeout(() => {
      setLoginUserOut(false);
      push("/");
    }, 3000);
  }
  return (
    <AuthLayout>
      <div className="landingPage">
        <h1>Welcome {fullName && fullName}</h1>
        <div className="landingPage__button">
          <AuthButton size="7rem" onClick={() => logUserOut()}>
            {loginUserOut ? "loading..." : "Logout"}
          </AuthButton>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
