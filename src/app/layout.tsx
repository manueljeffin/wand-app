import "./globals.css";
import {Inter} from "next/font/google";
import Header from "../components/Header";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wand.",
  description: "Discover the cosmetics that are safe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
