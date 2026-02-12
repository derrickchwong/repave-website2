interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-[#616161]" : "text-white";
  const accentColor = "text-[#63d297]";

  return (
    <span
      className={`font-logo font-bold text-2xl tracking-tight ${className}`}
    >
      <span className={textColor}>Repave</span>
      <span className={accentColor}>.ai</span>
    </span>
  );
}
