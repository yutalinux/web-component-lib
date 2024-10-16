import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const container = tv({
  base: "max-w-5xl w-screen min-h-screen",
});

export interface ContainerProps {
  children?: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className={container()}>{children || null}</div>;
}
