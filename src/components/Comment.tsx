import { RxAvatar } from "react-icons/rx";
import { IoIosText } from "react-icons/io";

type CommentProps = {
	name: string;
	message: string;
	isComment: boolean;
};

export default function Comment({ name, message, isComment }: CommentProps) {
	return (
		<div className={`${isComment ? "pl-4" : " bg-gray-50"} p-2`}>
			<div className="flex items-center gap-2 text-title">
				<RxAvatar className="text-lg" />
				<h3 className="font-bold">{name}</h3>
			</div>
			<p className="pt-">{message}</p>
			{isComment ? null : (
				<div>
					<button className="text-lime-600 flex items-center gap-1 ml-auto">
						<IoIosText />
						Answer
					</button>
				</div>
			)}
		</div>
	);
}
