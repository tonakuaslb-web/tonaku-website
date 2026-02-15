import { ReactNode } from "react";

type BackgroundConfig = Readonly<{
  type: "color" | "gradient" | "image" | "pattern";
  value: string; // Tailwind class ou URL
  overlay?: boolean;
  overlayOpacity?: number;
}>;

type SectionProps = Readonly<{
  // Identification
  id: string;

  // Contenu
  children: ReactNode;

  // Dimensions
  fullHeight?: boolean;
  containerWidth?: "sm" | "md" | "lg" | "xl" | "full";

  // Background
  background?: BackgroundConfig;

  // Espacement
  paddingY?: "sm" | "md" | "lg" | "xl" | "none";
  paddingX?: "sm" | "md" | "lg" | "xl" | "none";

  // Style
  className?: string;
  textColor?: string;
}>;

const paddingYMap = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
};

const paddingXMap = {
  none: "px-0",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
  xl: "px-12",
};

const containerWidthMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "max-w-full",
};

export default function Section({
  id,
  children,
  fullHeight = false,
  containerWidth = "lg",
  background,
  paddingY = "lg",
  paddingX = "md",
  className = "",
  textColor = "",
}: SectionProps) {
  // Construire les classes de background
  const getBackgroundClasses = () => {
    if (!background) return "";

    switch (background.type) {
      case "color":
        return background.value; // ex: "bg-primary-800"
      case "gradient":
        return background.value; // ex: "bg-gradient-to-r from-primary-800 to-primary-600"
      case "pattern":
        return background.value; // ex: "bg-pattern-dots"
      default:
        return "";
    }
  };

  // Style inline pour les images de background
  const getBackgroundStyle = () => {
    if (background?.type === "image") {
      return {
        backgroundImage: `url(${background.value})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }
    return {};
  };

  return (
    <section
      id={id}
      className={`
        relative
        ${fullHeight ? "min-h-screen" : ""}
        ${getBackgroundClasses()}
        ${paddingYMap[paddingY]}
        ${textColor}
        ${className}
      `.trim()}
      style={getBackgroundStyle()}
    >
      {/* Overlay pour les images de background */}
      {background?.type === "image" && background.overlay && (
        <div
          className="absolute inset-0 bg-blue-logo"
          style={{ opacity: background.overlayOpacity || 0.5 }}
        />
      )}

      {/* Container avec contenu */}
      <div
        className={`
          relative
          z-10
          mx-auto
          ${containerWidthMap[containerWidth]}
          ${paddingXMap[paddingX]}
        `.trim()}
      >
        {children}
      </div>
    </section>
  );
}
