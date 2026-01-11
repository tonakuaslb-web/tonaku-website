"use client";

import { cn } from "@/app/lib/utils";

type NavLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
  article?: string;
  className?: string;
  onClick?: () => void;
}>;

export default function NavLink({
  href,
  children,
  article,
  className = "",
  onClick,
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Smooth scroll vers la section
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium",
        className
      )}
    >
      {article && (
        <span className="text-sm text-neutral-500 font-normal mr-1">
          {article}
        </span>
      )}
      {children}
    </a>
  );
}
