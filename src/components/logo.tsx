import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

// Renders at 168px wide to exactly match the landing page header/footer
// (.logo img { width: 168px; height: auto; }). The SVG is 440×110 (4:1).
export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/repave-logo-horizontal.svg"
      alt="Repave.ai"
      width={168}
      height={42}
      priority
      className={className}
    />
  );
}
