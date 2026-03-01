"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

type NavDropdownProps = Readonly<{
  label: string;
  items: DropdownItem[];
  mainHref: string;
  article?: string;
  onItemClick?: () => void;
}>;

export default function NavDropdown({
  label,
  items,
  mainHref,
  article,
  onItemClick,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayLabel = article
    ? label.replace(article + " ", "")
    : label;

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Bouton principal avec dropdown */}
      <div className="flex items-center gap-1">
        {/* Lien vers la section */}
        <Link
          href={mainHref}
          onClick={(e) => {
            // Ne pas empêcher la navigation par défaut
            setIsOpen(false);
            onItemClick?.();
            // Forcer le scroll vers la section si c'est une ancre
            if (mainHref.startsWith('#')) {
              e.preventDefault();
              const element = document.getElementById(mainHref.substring(1));
              element?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-blue-logo hover:text-primary-600 transition-colors font-medium"
        >
          {article && <span className="text-neutral-500">{article} </span>}
          {displayLabel}
        </Link>

        {/* Bouton dropdown */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="p-1 hover:bg-neutral-100 rounded transition-colors"
          aria-label="Ouvrir le menu des projets"
        >
          <ChevronDown
            size={16}
            className={`text-blue-logo transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50 animate-fadeIn">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
              className="block px-4 py-3 text-blue-logo hover:bg-accent-50 hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
