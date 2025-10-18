"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApolloWrapper from "./ApolloWrapper";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Fire Chaty PageView on route change
    if (typeof window !== "undefined" && window.ChatyPixel) {
      window.ChatyPixel.track("PageView", { path: pathname });
    }
  }, [pathname]);

  return (
    <ApolloWrapper>
      {/* Chaty Pixel Script */}
      <Script
        id="pixel-chaty"
        strategy="afterInteractive"
        src="https://cdn.chaty.app/pixel.js?id=2GkrZD37"
      />

      <Navbar />
      {children}
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
        toastStyle={{
          backgroundColor: "#3b2f2f",
          color: "#f5f3ee",
          border: "2px solid #c19a6b",
          fontFamily: "serif",
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
        progressStyle={{ backgroundColor: "#c19a6b" }}
      />
    </ApolloWrapper>
  );
}
