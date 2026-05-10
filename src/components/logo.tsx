import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/repave-logo-horizontal.svg"
      alt="Repave.ai"
      width={160}
      height={40}
      className={`h-8 w-auto ${className}`}
    />
  );
}
