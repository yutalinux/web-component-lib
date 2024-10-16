"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "rounded-md outline-none",
  variants: {
    color: {
      primary: "primary hover:primary-active",
      secondary: "secondary secondary-border hover:secondary-active",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    icon: {
      true: "px-1 py-1",
      false: "px-2 py-1",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    icon: false,
  },
});

type VProps = VariantProps<typeof button>;

export interface ButtonProps extends VProps {
  label?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  color,
  size,
  icon,
  label,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button className={button({ color, size, icon })} onClick={onClick}>
      {label || children || null}
    </button>
  );
}
