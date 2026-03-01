import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

export default function ProjectNavigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-6 h-30 flex items-center justify-between">
        {/* Logo à gauche */}
        <Logo />
        
        {/* Groupe à droite : Retour + Bouton */}
        <div className="flex items-center gap-6">
          {/* Lien retour */}
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-blue-logo hover:text-primary-600 transition-colors font-semibold"
          >
            <ChevronLeft size={20} />
            <span>Retour aux projets</span>
          </Link>

          {/* Bouton Soutenez-nous (le plus à droite) */}
          <Link href="/#soutenez-nous">
            <Button variant="primary" size="sm">
              Soutenez-nous
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
