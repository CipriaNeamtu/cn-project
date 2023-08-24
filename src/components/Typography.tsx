import { ReactNode } from "react";

type TypographyProps = {
	children: ReactNode;
	className?: string;
	mode: string;
	family: string;
}

const Typography = ({ children, className, mode, family }: TypographyProps) => {
	return (
		<div className={`typography ${className ? className : ''} ${mode}_${family}`}>
			{children}
		</div>
	)
};

export default Typography;
