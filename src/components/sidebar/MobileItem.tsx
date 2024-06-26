"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemsProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

export default function MobileItem({
  icon: Icon,
  href,
  onClick,
  active,
}: MobileItemsProps) {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `
          group
          flex
          gap-x-3
          p-4
          text-sm
          leading-6
          font-semibold
          w-full
          justify-center
          text-gray-500
          hover:text-black
          hover:bg-gray-100
        `,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}
