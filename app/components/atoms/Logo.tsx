import Link from "next/link";
import Image from "next/image";

type LogoProps = Readonly<{
  className?: string;
}>;

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-1 hover:opacity-80 transition-opacity ${className}`}
    >
      <Image
        src="/logo-titre.png"
        alt="TONAKU"
        width={90}
        height={100}
        priority
        className="object-contain"
      />
    </Link>
  );
}
