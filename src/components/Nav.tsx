import { ReactNode } from "react";

type NavProps = {
	title: string,
	test: number,
	cipri?: 'Neamtu' | 'Anton',
	children?: ReactNode,
}

const Nav = ({ title, test, cipri, children} : NavProps) => {
	return (
		<div>
			{title} + {test} + {cipri}
			<p>{children}</p>
		</div>
	)
}

export default Nav;