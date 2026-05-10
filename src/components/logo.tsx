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
      width={190}
      height={48}
      className={`h-10 w-auto ${className}`}
    />
  );
}
