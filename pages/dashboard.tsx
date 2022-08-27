import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";

const Dashboard: NextPage = () => {
  const [fullName, setfullName] = useState<string | null>();

  useEffect(() => {
    const retrievedUser = localStorage.getItem("fullName");
    setfullName(retrievedUser);
  }, []);
  return (
    <AuthLayout>
      <div className="landingPage">
        <h1>Welcome {fullName && fullName}</h1>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
