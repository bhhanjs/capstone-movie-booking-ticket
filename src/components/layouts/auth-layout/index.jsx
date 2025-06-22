import AuthFooter from "@/components/shared/auth/footer";
import AuthHeader from "@/components/shared/auth/header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <AuthHeader />
      <Outlet />
      <AuthFooter />
    </div>
  );
}
