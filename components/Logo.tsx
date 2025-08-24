export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl shadow-glow" style={{width:size,height:size,background:"linear-gradient(135deg,#7C3AED,#22C55E)"}} />
      <span className="font-semibold tracking-tight">Unomi</span>
    </div>
  );
}
