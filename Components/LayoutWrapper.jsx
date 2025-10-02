"use client"
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  const hideLayout = ["/log-in", "/register", "/dashboard"];


  const isHide = hideLayout.some(route => pathname.startsWith(route));

  return (
    <div>
      {!isHide && <Navbar />}
      {children}
      {!isHide && <Footer />}
    </div>
  );
}
