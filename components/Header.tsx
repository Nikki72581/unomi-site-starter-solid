"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
const LINKS=[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/podcast",label:"Podcast"},{href:"/contact",label:"Contact"}];
export default function Header(){
  const pathname=usePathname();
  return(<header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3"><Logo/></Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        {LINKS.map(l=>(<Link key={l.href} href={l.href} className={`px-3 py-1.5 rounded-full border transition ${pathname===l.href?"bg-neutral-900 text-white border-neutral-900":"bg-white hover:bg-neutral-50 border-neutral-200"}`}>{l.label}</Link>))}
      </nav>
      <div className="flex items-center gap-3">
        <Link href="/contact" className="btn-primary">Start a project</Link>
      </div>
    </div>
  </header>);
}
