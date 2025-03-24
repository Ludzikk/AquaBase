import FishSectionTitle from "./FishSectionTitle";
import { fishData } from "../data/fishData";
import { useParams } from "react-router-dom";
import OtherFishesItem from "./OtherFishesItem";

export default function OtherFishes() {
	const { name } = useParams();

	const fishesEl = fishData.map((fish, index) => {
		if (fish.name !== name && index < 3) {
			return <OtherFishesItem key={fish.name} fishData={fish} />;
		}
	});

	return (
		<div>
			<FishSectionTitle>Other fish</FishSectionTitle>
			<ul className="grid grid-cols-2 md:grid-cols-3 gap-2">{fishesEl}</ul>
		</div>
	);
}
