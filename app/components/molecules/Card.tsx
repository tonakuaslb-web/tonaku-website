import { ReactNode } from "react";

type CardProps = Readonly<{
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  background?: string;
  className?: string;
  onClick?: () => void;
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
  onClick,
}: CardProps) {
  const bgClass = background || variantMap[variant];
  
  return (
    <div
      className={`
        rounded-xl
        p-6
        transition-all duration-300
        ${bgClass}
        ${onClick ? "cursor-pointer hover:scale-105 hover:shadow-xl" : ""}
        ${className}
      `.trim()}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
