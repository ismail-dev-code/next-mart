"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-extrabold select-none"
              aria-label="NextMart - Home"
            >
              <ShoppingBag size={26} className="text-amber-400" />
              <span className="leading-none">
                <span className="text-sky-300">Next</span>
                <span className="text-amber-400">Mart</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              NextMart is your trusted online marketplace for everything you
              need — from daily essentials to the latest gadgets. Shop smart,
              shop easy.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/electronics"
                  className="hover:text-amber-400 transition"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/fashion"
                  className="hover:text-amber-400 transition"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/groceries"
                  className="hover:text-amber-400 transition"
                >
                  Groceries
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/home"
                  className="hover:text-amber-400 transition"
                >
                  Home & Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="hover:text-amber-400 transition flex items-center gap-2"
                >
                  <HelpCircle size={16} />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-amber-400 transition flex items-center gap-2"
                >
                  <FileText size={16} />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-amber-400 transition flex items-center gap-2"
                >
                  <FileText size={16} />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                support@nextmart.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                +1 987 654 321
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-400" />
               Noakhali, Bangladesh
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-amber-400"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-amber-400"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-amber-400"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-amber-400"
              >
                <Github size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-sky-300">Next</span>
          <span className="text-amber-400">Mart</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
