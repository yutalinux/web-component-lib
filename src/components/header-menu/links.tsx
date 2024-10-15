import type { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const menuLinks = tv({
  base: "flex items-center gap-5",
});

type VProps = VariantProps<typeof menuLinks>;

interface Props extends VProps {
  children?: ReactNode;
}

export function HeaderMenuLinks({ children }: Props) {
  return <ul className={menuLinks()}>{children}</ul>;
}
