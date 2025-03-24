type ButtonProps = {
	children: string;
};

export default function Button({ children }: ButtonProps) {
	return <button className="py-2 px-6 border border-gray-400 rounded-lg font-bold">{children}</button>;
}
