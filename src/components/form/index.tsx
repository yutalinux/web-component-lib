import type { ReactNode } from "react";
import * as Aria from "react-aria-components";
import { tv } from "tailwind-variants";

const form = tv({
  base: "bg-white text-black border p-4 rounded-md flex flex-col gap-4",
});

export interface FormProps {
  children: ReactNode;
}

export function Form({ children }: FormProps) {
  return <Aria.Form className={form()}>{children}</Aria.Form>;
}
