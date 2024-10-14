import * as Aria from "react-aria-components";
import { tv } from "tailwind-variants";

const textBox = tv({
  base: "bg-white text-black focus:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-800 dark:focus:bg-neutral-800 border box-border rounded-md px-2 py-1",
});

export interface TextBoxProps {
  placeholder: string;
}

export default function TextBox({ placeholder }: TextBoxProps) {
  return <Aria.Input className={textBox()} placeholder={placeholder} />;
}
