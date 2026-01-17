"use client";

import NavLink from "../atoms/NavLink";

type NavItem = Readonly<{
  label: string;
  href: string;
  article?: string;
}>;

type NavMenuProps = Readonly<{
  items: NavItem[];
  onItemClick?: () => void;
  className?: string;
}>;

export default function NavMenu({
  items,
  onItemClick,
  className = "",
}: NavMenuProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          article={item.article}
          onClick={onItemClick}
        >
          {item.article
            ? item.label.replace(item.article + " ", "")
            : item.label}
        </NavLink>
      ))}
    </div>
  );
}
