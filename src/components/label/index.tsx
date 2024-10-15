import * as Aria from "react-aria-components";
import { tv } from "tailwind-variants";

const labelStyle = tv({
  base: "text-black dark:text-white",
});

export interface LabelProps {
  label: string;
}

export function Label({ label }: LabelProps) {
  return <Aria.Label className={labelStyle()}>{label}</Aria.Label>;
}
