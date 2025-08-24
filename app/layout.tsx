import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title:"Unomi — Independent tech consulting, built on trust",
  description:"Unomi is an independent consultancy for eCommerce, ERP, custom development, reporting, and AI.",
  icons:{icon:"/favicon.ico"},
  openGraph:{title:"Unomi",description:"Independent tech consulting, built on trust.",images:["/og.png"]},
  metadataBase:new URL("https://unomi.co")
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return(<html lang="en"><body>{children}</body></html>);
}
