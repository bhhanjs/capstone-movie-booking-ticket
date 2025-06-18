import React from "react";
import { Outlet } from "react-router-dom";

export default function HomePageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
