"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  Home,
  Box,
  PlusCircle,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const publicLinks = [
  { href: "/", label: "Home", icon: <Home size={18} /> },
  { href: "/products", label: "Products", icon: <Box size={18} /> },
];

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const dashboardLinks = session
    ? [{ href: "/dashboard/add-product", label: "Add Product", icon: <PlusCircle size={18} /> }]
    : [];

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-blue-600/95 backdrop-blur-md text-white shadow-md border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold select-none"
            >
              <span className="bg-white text-blue-600 rounded-full px-2 py-1">NM</span>
              NextMart
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div className="flex items-center space-x-1">
                {publicLinks.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(href)
                        ? "bg-blue-700 text-white"
                        : "text-white hover:text-gray-200 hover:bg-blue-500/30"
                    }`}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </div>

              {/* Dashboard Links */}
              {dashboardLinks.length > 0 && (
                <div className="flex items-center ml-3 space-x-1">
                  {dashboardLinks.map(({ href, label, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(href)
                          ? "bg-green-700 text-white"
                          : "text-white hover:text-gray-200 hover:bg-green-500/30"
                      }`}
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-3 py-2 rounded-md border border-blue-700 text-white hover:bg-blue-500/30 text-sm font-medium"
                  >
                    <LogIn size={16} />
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-white hover:bg-blue-500/30"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-blue-700 bg-blue-600/95">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {publicLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive(href)
                      ? "bg-blue-700 text-white"
                      : "text-white hover:text-gray-200 hover:bg-blue-500/30"
                  }`}
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              ))}

              {dashboardLinks.length > 0 && (
                <div className="mt-2 border-t border-blue-700 pt-3 space-y-1">
                  {dashboardLinks.map(({ href, label, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive(href)
                          ? "bg-green-700 text-white"
                          : "text-white hover:text-gray-200 hover:bg-green-500/30"
                      }`}
                    >
                      {icon}
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-3 flex space-x-2">
                {session ? (
                  <button
                    onClick={() => {
                      signOut();
                      setOpen(false);
                    }}
                    className="flex-1 flex items-center gap-2 justify-center px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="flex-1 flex items-center gap-2 justify-center px-3 py-2 rounded-md border border-blue-700 text-white hover:bg-blue-500/30 text-sm font-medium"
                  >
                    <LogIn size={16} />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
