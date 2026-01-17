import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type CardProps = Readonly<{
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  background?: string;
  className?: string;
}>;

const variantMap = {
  default: "bg-white border border-neutral-200",
  outlined: "bg-transparent border-2 border-primary-600",
  elevated: "bg-white shadow-lg",
};

export default function Card({
  children,
  variant = "default",
  background,
  className = "",
}: CardProps) {
  const bgClass = background || variantMap[variant];

  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        bgClass,
        className
      )}
    >
      {children}
    </div>
  );
}
