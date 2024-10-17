import { tv } from "tailwind-variants";

const labelStyle = tv({
  base: "text-black dark:text-white",
});

export interface LabelProps {
  label: string;
}

export function Label({ label }: LabelProps) {
  return <label className={labelStyle()}>{label}</label>;
}
