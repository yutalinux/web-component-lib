"use client";
import type { ReactNode } from "react";
import * as Aria from "react-aria-components";
import { Button } from "../button";
import { tv } from "tailwind-variants";

const menu = tv({
  base: "rounded-md outline-none px-1 py-1 flex flex-col gap-2",
  variants: {
    color: {
      primary: "primary",
      secondary: "secondary secondary-border",
    },
  },
});

export interface MenuProps {
  label?: string;
  icon?: boolean;
  buttonChildren?: ReactNode;
  color?: "primary" | "secondary";
  size?: "medium" | "small" | "large";
  children: ReactNode;
}

export function Menu({
  icon,
  color,
  size,
  label,
  buttonChildren,
  children,
}: MenuProps) {
  return (
    <Aria.MenuTrigger>
      <Button label={label} icon={icon} color={color} size={size}>
        {buttonChildren}
      </Button>
      <Aria.Popover>
        <Aria.Menu className={menu({ color })}>{children}</Aria.Menu>
      </Aria.Popover>
    </Aria.MenuTrigger>
  );
}

export * from "./item";
export * from "./icon-item";
export * from "./link-item";
