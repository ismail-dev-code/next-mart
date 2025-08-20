"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">NextMart</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/products" className="hover:text-gray-200">Products</Link>

        {session ? (
          <>
            <Link href="/dashboard/add-product" className="hover:text-gray-200">Add Product</Link>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="hover:text-gray-200">Login</Link>
        )}
      </div>
    </nav>
  );
}
