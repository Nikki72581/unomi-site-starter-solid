import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
       sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans"]
      },
      colors: { brand: {600:"#7C3AED"}, accent: {500:"#22C55E"} },
      boxShadow: { glow:"0 0 30px rgba(138,77,255,0.25), 0 0 50px rgba(34,197,94,0.20)" },
      backgroundImage: {
        "unomi-gradient":"radial-gradient(1200px 600px at 10% -10%, rgba(124,58,237,0.18), transparent), radial-gradient(1200px 600px at 110% 10%, rgba(34,197,94,0.18), transparent)"
      }
    },
  },
  plugins: [],
};
export default config;
