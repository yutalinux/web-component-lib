"use client";
import { useRef, type ReactNode } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button
        label={label}
        icon={icon}
        color={color}
        size={size}
        onClick={() => {
          if (dialogRef.current) {
            if (!dialogRef.current.open) {
              dialogRef.current.show();
            } else {
              dialogRef.current.close();
            }
          }
        }}
      >
        {buttonChildren}
      </Button>
      <dialog
        ref={dialogRef}
        className="bg-transparent"
        onClick={() => {
          if (dialogRef.current) dialogRef.current.close();
        }}
        onBlur={() => {
          if (dialogRef.current) dialogRef.current.close();
        }}
      >
        <menu className={menu({ color })}>{children}</menu>
      </dialog>
    </>
  );
}

export * from "./item";
export * from "./icon-item";
export * from "./link-item";
