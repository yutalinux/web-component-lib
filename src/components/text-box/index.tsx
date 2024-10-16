"use client";

import type { HTMLInputTypeAttribute } from "react";
import * as Aria from "react-aria-components";
import { tv } from "tailwind-variants";

const textBox = tv({
  base: "secondary secondary-border focus:secondary-active rounded-md px-2 py-1 w-full",
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
