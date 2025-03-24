import FishCommentItem from "./FishCommentItem";
import { fishData } from "../data/fishData";
import { useParams } from "react-router-dom";
import { IoIosText } from "react-icons/io";
import FishSectionTitle from "./FishSectionTitle";
import { nanoid } from "nanoid";

export default function FishComments() {
	const { name } = useParams();
	const currentFishComments = fishData.find(
		(fish) => fish.name === name
	)?.comments;
	
	const currentFishCommentsEl = currentFishComments?.map((comment) => {
		return <FishCommentItem key={nanoid()} commentData={comment}/>;
	});

	return (
		<div>
			<FishSectionTitle className="flex items-center gap-1">
				<IoIosText />
				Comments: {currentFishComments?.length || 0}
			</FishSectionTitle>
			<ul>{currentFishCommentsEl}</ul>
		</div>
	);
}
