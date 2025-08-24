
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title:"Unomi — Independent tech consulting, built on trust",
  description:"Unomi is an independent consultancy for eCommerce, ERP, custom development, reporting, and AI.",
  icons:{
    icon: ["/mascot/unomi-robot-32.png", "/favicon.ico"],
    apple: "/mascot/unomi-robot-180.png"
  },
  openGraph:{title:"Unomi",description:"Independent tech consulting, built on trust.",images:["/og.png"]},
  metadataBase:new URL("https://unomi.co")
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
};