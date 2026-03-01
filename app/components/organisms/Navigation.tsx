"use client";

import { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import NavLink from "../atoms/NavLink";
import { NavDropdown, MobileMenuButton } from "../molecules";

type NavItem = Readonly<{
  label: string;
  href: string;
  article?: string;
  dropdown?: Array<{ label: string; href: string }>;
}>;

type NavigationProps = Readonly<{
  navItems: NavItem[];
  ctaLabel: string;
  ctaTargetId: string;
}>;

export default function Navigation({
  navItems,
  ctaLabel,
  ctaTargetId,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-30">
          {/* Logo */}
          <Logo />

          {/* Navigation Desktop + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) =>
                item.dropdown && item.dropdown.length > 0 ? (
                  <NavDropdown
                    key={item.href}
                    label={item.label}
                    mainHref={item.href}
                    items={item.dropdown}
                    article={item.article}
                  />
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    article={item.article}
                  >
                    {item.article
                      ? item.label.replace(item.article + " ", "")
                      : item.label}
                  </NavLink>
                )
              )}
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const element = document.getElementById(ctaTargetId);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {ctaLabel}
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fadeIn border-t border-neutral-200 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.dropdown && item.dropdown.length > 0 ? (
                  <NavDropdown
                    key={item.href}
                    label={item.label}
                    mainHref={item.href}
                    items={item.dropdown}
                    article={item.article}
                    onItemClick={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    article={item.article}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.article
                      ? item.label.replace(item.article + " ", "")
                      : item.label}
                  </NavLink>
                )
              )}
            </div>
            <Button
              variant="primary"
              size="md"
              className="w-full mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const element = document.getElementById(ctaTargetId);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
