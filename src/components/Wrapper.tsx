import { ReactNode } from "react";

type WrapperProps = {
	children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
	return <div className="max-w-[1400px] w-full mx-auto px-4">{children}</div>;
}
