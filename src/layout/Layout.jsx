import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { lazy, Suspense } from "react";
import Spinner from "../components/Spinner";
import MobileFooter from "../components/MobileFooter";
function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default Layout;
