
import ClientLayout from "../components/ClientLayout";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextMart",
  description: "Simple Next.js 15 marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClientLayout>
            <Navbar />
            {children}
            <Footer />
          </ClientLayout>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
