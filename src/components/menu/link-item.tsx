import type { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const menuLinkItem = tv({
  slots: {
    base: "list-none",
    link: "text-white",
  },
});

type VProps = VariantProps<typeof menuLinkItem>;

interface Props extends VProps {
  href: string;
  children?: ReactNode;
}

export function MenuLinkItem({ href, children }: Props) {
  const { base, link } = menuLinkItem();
  return (
    <li className={base()}>
      <a className={link()} href={href}>
        {children}
      </a>
    </li>
  );
}
