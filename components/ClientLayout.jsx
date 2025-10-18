// components/ClientLayout.jsx
"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApolloWrapper from "./ApolloWrapper";

export default function ClientLayout({ children }) {
  return (
    <ApolloWrapper>
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
