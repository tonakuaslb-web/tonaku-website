import { LucideIcon } from "lucide-react";

type ProjectInfoCardProps = Readonly<{
  icon: LucideIcon;
  title: string;
  value: string;
  colorScheme: "accent" | "secondary" | "primary";
}>;

const colorClasses = {
  accent: {
    bg: "bg-accent-50",
    border: "border-accent-400",
    icon: "text-accent-600",
  },
  secondary: {
    bg: "bg-secondary-50",
    border: "border-secondary-400",
    icon: "text-secondary-600",
  },
  primary: {
    bg: "bg-primary-50",
    border: "border-primary-400",
    icon: "text-primary-600",
  },
};

export default function ProjectInfoCard({
  icon: Icon,
  title,
  value,
  colorScheme,
}: ProjectInfoCardProps) {
  const colors = colorClasses[colorScheme];

  return (
    <div className={`${colors.bg} p-6 rounded-xl border-l-4 ${colors.border}`}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className={colors.icon} size={24} />
        <h3 className="font-semibold text-blue-logo">{title}</h3>
      </div>
      <p className="text-lg text-neutral-700">{value}</p>
    </div>
  );
}
