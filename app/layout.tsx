import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Manateq Investor Portal",
  description: "Investor portal experience inspired by the Manateq design system"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.variable}`}>
        <div className="background-grid" aria-hidden />
        {children}
      </body>
    </html>
  );
}
