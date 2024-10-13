import type { ReactNode } from "react";
import { tv } from "tailwind-variants";

const card = tv({
	base: "bg-white text-black border p-2 rounded-md min-h-32",
});

export interface CardProps {
	children?: ReactNode;
}

export default function Card(props: CardProps) {
	return <div className={card()}>{props.children || null}</div>;
}
