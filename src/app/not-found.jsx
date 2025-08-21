"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Something went wrong.
        </h2>
        <p className="text-gray-600 mb-6">
          We couldn't load the page you were looking for. Please try again or go back to the homepage.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="bg-amber-600 hover:bg-amber-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="bg-slate-800 hover:bg-slate-900 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
