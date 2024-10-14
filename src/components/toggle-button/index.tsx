import { useState } from "react";
import * as Aria from "react-aria-components";
import { type VariantProps, tv } from "tailwind-variants";

const toggleButton = tv({
  base: "rounded-md outline-none",
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    icon: {
      true: "px-1 py-1",
      false: "px-2 py-1",
    },
  },
  slots: {
    select:
      "text-white bg-black hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-100",
    noSelect:
      "border box-border text-black bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800",
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    icon: false,
  },
});

type VProps = VariantProps<typeof toggleButton>;

export interface ToggleButtonProps extends VProps {
  label: string;
  onChange?: (isSelected: boolean) => void;
}

export default function ToggleButton({
  size,
  label,
  icon,
  onChange,
}: ToggleButtonProps) {
  const { base, select, noSelect } = toggleButton({
    size,
    icon,
  });

  const [isSelected, setIsSelected] = useState(false);

  const innerOnChange = (isSelected: boolean) => {
    setIsSelected(isSelected);
    if (onChange) {
      onChange(isSelected);
    }
  };

  return (
    <Aria.ToggleButton
      className={[base(), isSelected ? select() : noSelect()].join(" ")}
      onChange={innerOnChange}
    >
      {label}
    </Aria.ToggleButton>
  );
}
