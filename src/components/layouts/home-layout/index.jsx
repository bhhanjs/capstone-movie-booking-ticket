import React from "react";
import { Outlet } from "react-router-dom";
import HomeFooter from "@/components/shared/homepage/footer";
import HomeHeader from "@/components/shared/homepage/header";

export default function HomePageLayout() {
  return (
    <div>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
}
