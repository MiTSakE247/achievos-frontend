"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import LandingPage from "@templates/landing-page/LandingPage";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname(); // ✅ Get current route

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname === "/authenticate" ? children : <LandingPage>{children}</LandingPage>}
      </body>
    </html>
  );
}
