"use client";

import type { HTMLInputTypeAttribute } from "react";
import { tv } from "tailwind-variants";

const input = tv({
  base: "secondary secondary-border focus:secondary-active rounded-md px-2 py-1 w-full",
});

export interface TextBoxProps {
  type?: HTMLInputTypeAttribute;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  placeholder?: string;
}

export function Input({ type, autoComplete, placeholder }: TextBoxProps) {
  return (
    <input
      type={type}
      className={input()}
      autoComplete={autoComplete}
      placeholder={placeholder}
    />
  );
}
