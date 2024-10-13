import type { ReactNode } from "react";

export interface Props {
	children?: ReactNode;
}

export default function HeaderMenu({ children }: Props) {
	return (
		<div className="h-16 w-full">
			<nav className="shadow-menubar fixed flex h-16 w-full items-center justify-center bg-[#333333cc] backdrop-blur">
				<div className="flex w-full max-w-4xl justify-between px-7">
					{children}
				</div>
			</nav>
		</div>
	);
}
