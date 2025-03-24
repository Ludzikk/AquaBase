import { ReactNode } from "react";

type FishSectionTitleProps = {
	className?: string,
	children: ReactNode
}

export default function FishSectionTitle({className, children}: FishSectionTitleProps) {
	return <h2 className={`font-bold text-title text-xl py-2 ${className}`}>{children}</h2>;
}
