// components/Logo.tsx
import Image from "next/image";

export function Logo({ size = 28, variant = "wordmark" }: { size?: number; variant?: "wordmark" | "text"; }) {
  if (variant === "text") {
    return <span className="font-extrabold tracking-tight" style={{ color: "var(--brand-ink)" }}>junova</span>;
  }
  return (
    <Image
      src="/junova-wordmark.svg"   // if you prefer the SVG, drop it in /public
      alt="Junova"
      width={size * 5}
      height={size}
      priority
    />
  );
}
