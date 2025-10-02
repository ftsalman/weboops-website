import React from "react";
import { NavBar } from "../components/navbars/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-grow flex flex-col pt-[64px]">
        <Outlet />
      </main>
    </div>
  );
};
