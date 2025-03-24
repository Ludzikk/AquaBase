import { nanoid } from "nanoid";
import type { Comment as CommentType } from "../data/fishData";
import Comment from "./Comment";

type FishCommentItemProps = {
	commentData: CommentType;
};

export default function FishCommentItem({ commentData }: FishCommentItemProps) {
	const { creatorName, creatorMessage, answers } = commentData;
	const doesHaveAnswers = answers !== undefined && answers?.length > 0;

	const answersEl = answers?.map((answer) => {
		return (
			<Comment
				name={answer.answerName}
				message={answer.answerMessage}
				isComment={doesHaveAnswers}
				key={nanoid()}
			/>
		);
	});

	return (
		<li>
			<Comment isComment={false} name={creatorName} message={creatorMessage} />
			{doesHaveAnswers ? (
				<div className="bg-gray-200 p-2">
					<h4 className="opacity-70 pb-2">Answers: {answers.length}</h4>
					<div>{answersEl}</div>
				</div>
			) : null}
		</li>
	);
}
