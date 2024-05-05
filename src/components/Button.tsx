"use client";

import clsx from "clsx";
import { Dangrek } from "next/font/google";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullwidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullwidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
      flex
      justify-center
      items-center
      rounded-md
      h-8
      px-3
      py-2
      text-base
      font-semibold
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-default",
        fullwidth && "w-full",
        secondary ? "text-gray-900" : "text-black",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600 text-white",
        !secondary && !danger && "bg-transparent"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
