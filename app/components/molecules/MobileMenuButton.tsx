"use client";

type MobileMenuButtonProps = Readonly<{
  isOpen: boolean;
  onClick: () => void;
}>;

export default function MobileMenuButton({
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      className="lg:hidden text-neutral-700 focus:outline-none"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}
