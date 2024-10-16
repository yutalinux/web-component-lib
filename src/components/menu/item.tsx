import * as Aria from "react-aria-components";
import { type VariantProps, tv } from "tailwind-variants";

const menuItem = tv({
  base: "outline-none rounded px-1",
  variants: {
    color: {
      primary:
        "text-white bg-black hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-100",
      secondary:
        "text-black bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

type VProps = VariantProps<typeof menuItem>;

export interface MenuItemProps extends VProps {
  label: string;
  onAction?: () => void;
}

export function MenuItem({ color, size, label, onAction }: MenuItemProps) {
  return (
    <Aria.MenuItem
      className={menuItem({
        color,
        size,
      })}
      onAction={onAction}
    >
      {label}
    </Aria.MenuItem>
  );
}
