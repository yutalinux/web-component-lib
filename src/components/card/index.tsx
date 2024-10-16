import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const card = tv({
  base: "secondary secondary-border p-2 rounded-md",
});

export interface CardProps {
  children?: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className={card()}>{children || null}</div>;
}
