"use client";

import React, { useEffect } from "react";

export default function LoadingSpinner({ message = "Loading, please wait..." }) {
      useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-7 h-7 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"></div>

      {/* Optional loading message */}
      {message && <p className="mt-4 text-gray-700 text-lg font-medium">{message}</p>}
    </div>
  );
}
