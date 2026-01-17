import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { MapPin } from "lucide-react";

type TeamMemberCardProps = Readonly<{
  name: string;
  role: string;
  location: string;
  photo?: string;
  className?: string;
}>;

export default function TeamMemberCard({
  name,
  role,
  location,
  photo,
  className = "",
}: TeamMemberCardProps) {
  // Extraire les initiales du nom complet
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        className
      )}
    >
      {/* Photo ou cercle avec initiales */}
      <div className="w-32 h-32 rounded-full bg-blue-logo shadow-md flex items-center justify-center mb-3 overflow-hidden relative">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="128px"
          />
        ) : (
          <span className="text-white text-4xl font-bold">{initials}</span>
        )}
      </div>

      {/* Nom */}
      <h3 className="text-2xl font-bold text-blue-logo mb-1">{name}</h3>

      {/* Rôle */}
      <p className="text-base font-semibold text-secondary-600 mb-1">{role}</p>

      {/* Localisation */}
      <div className="flex items-center gap-2 text-primary-600">
        <MapPin size={18} strokeWidth={2} />
        <span className="text-sm font-medium">{location}</span>
      </div>
    </div>
  );
}
