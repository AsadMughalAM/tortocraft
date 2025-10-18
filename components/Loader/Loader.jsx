// components/Loader/loading.js
"use client";

import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-[#c19a6b] border-b-[#c19a6b] border-l-transparent border-r-transparent rounded-full animate-spin"></div>
    </div>
  );
}
