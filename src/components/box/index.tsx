import type { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const box = tv({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

type VProps = VariantProps<typeof box>;

export interface BoxProps extends VProps {
  children?: ReactNode;
}

export function Box({ orientation, children }: BoxProps) {
  return <div className={box({ orientation })}>{children || null}</div>;
}
