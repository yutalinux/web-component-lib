"use client";

import type { HTMLInputTypeAttribute } from "react";
import { tv } from "tailwind-variants";

const textBox = tv({
  base: "secondary secondary-border focus:secondary-active rounded-md px-2 py-1 w-full",
});

export interface TextBoxProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export function Input({ type, placeholder }: TextBoxProps) {
  return (
    <input type={type} className={textBox()} placeholder={placeholder} />
  );
}
