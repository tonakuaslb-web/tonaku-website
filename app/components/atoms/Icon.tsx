import { ReactNode } from "react";

type IconProps = Readonly<{
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}>;

const sizeMap = {
  sm: "w-10 h-10 text-lg",
  md: "w-12 h-12 text-xl",
  lg: "w-16 h-16 text-2xl",
};

export default function Icon({ children, size = "md", className = "" }: IconProps) {
  return (
    <div
      className={`
        flex items-center justify-center
        bg-accent-500
        rounded-lg
        ${sizeMap[size]}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
