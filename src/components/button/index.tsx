"use client";

import * as Aria from "react-aria-components";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "rounded-md outline-none",
  variants: {
    color: {
      primary:
        "text-white bg-black hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-100",
      secondary:
        "border box-border text-black bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-800",
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
  label: string;
  onClick?: (e: Aria.PressEvent) => void;
}

export function Button({ color, size, icon, label, onClick }: ButtonProps) {
  return (
    <Aria.Button
      type="button"
      className={button({ color, size, icon })}
      onPress={onClick}
    >
      {label}
    </Aria.Button>
  );
}
