// app/layout.tsx
import "./globals.css";
import "./styles/junova.tokens.css"; // belt + suspenders
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junova",
  description: "Modern systems, human sense.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  },
  themeColor: "#141414",
  openGraph: {
    title: "Junova",
    description: "Modern systems, human sense.",
    images: ["/junova_avatar_square.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Junova",
    description: "Modern systems, human sense.",
    images: ["/junova_avatar_square.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
