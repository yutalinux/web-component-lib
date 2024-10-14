import { type VariantProps, tv } from "tailwind-variants";

const menuIconItem = tv({
  slots: {
    base: "block w-9",
    img: "h-9 w-9 rounded-full",
  },
});

type VProps = VariantProps<typeof menuIconItem>;

interface Props extends VProps {
  href: string;
  icon: string;
}

export default function MenuIconItem({ href, icon }: Props) {
  const { base, img } = menuIconItem();

  return (
    <a className={base()} href={href}>
      <img className={img()} src={icon} alt="Icon" />
    </a>
  );
}
