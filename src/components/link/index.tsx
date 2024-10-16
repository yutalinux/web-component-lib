import { tv } from "tailwind-variants";

const link = tv({
  base: "text-blue-600 dark:text-blue-600",
});

export interface LinkProps {
  label: string;
  href: string;
}

export function Link({ href, label }: LinkProps) {
  return (
    <a href={href} className={link()}>
      {label}
    </a>
  );
}
