import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { lazy, Suspense } from "react";
import Spinner from "../components/Spinner";
import MobileFooter from "../components/MobileFooter";
import ScrollToTop from '../components/ScrollToTop'

function Layout() {
  return (
    <>
    <ScrollToTop />
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
