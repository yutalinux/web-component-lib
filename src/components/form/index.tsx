import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const form = tv({
  base: "secondary secondary-border p-4 rounded-md flex flex-col gap-4",
});

export interface FormProps {
  children: ReactNode;
}

export function Form({ children }: FormProps) {
  return <form className={form()}>{children}</form>;
}
