import { Link } from "react-router-dom";
import type { Fish } from "../data/fishData";

type OtherFishesItemProps = {
	fishData: Fish;
};

export default function OtherFishesItem({ fishData }: OtherFishesItemProps) {
	return (
		<Link to={`../${fishData.name}`}>
			<img
				src={fishData.images[0]}
				alt={fishData.name}
				className="max-h-[250px] w-full object-cover rounded-lg"
			/>
			<h4 className="text-center text-lg text-title">{fishData.name}</h4>
		</Link>
	);
}
