"use client";

import type { HTMLInputTypeAttribute } from "react";
import * as Aria from "react-aria-components";
import { tv } from "tailwind-variants";

const textBox = tv({
  base: "bg-white text-black border-neutral-200 focus:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-800 dark:focus:bg-neutral-800 border box-border rounded-md px-2 py-1 w-full",
});

export interface TextBoxProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export function TextBox({ type, placeholder }: TextBoxProps) {
  return (
    <Aria.Input type={type} className={textBox()} placeholder={placeholder} />
  );
}
