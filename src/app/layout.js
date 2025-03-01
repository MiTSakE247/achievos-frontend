"use client";

import { Geist, Geist_Mono } from "next/font/google";
import LandingPage from "@templates/landing-page/LandingPage";
import "./globals.css";
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LandingPage>{children}</LandingPage>
      </body>
    </html>
  );
}
