export default function Footer(){
  return(<footer className="mt-24 border-t bg-white/60 backdrop-blur">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Unomi. All rights reserved.</p>
        <p className="opacity-80">Independent. No kickbacks. Just clarity.</p>
      </div>
    </div>
  </footer>);
}
