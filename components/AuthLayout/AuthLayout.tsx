import React from "react";
import { AuthWrapper, AuthTitle } from "./AuthStyle";

export interface AuthLayoutProps {
  children: React.ReactNode;
  authPageHeight?: string;
}

function AuthLayout({ authPageHeight, children }: AuthLayoutProps) {
  return <AuthWrapper authPageHeight={authPageHeight}>{children}</AuthWrapper>;
}

export default AuthLayout;
