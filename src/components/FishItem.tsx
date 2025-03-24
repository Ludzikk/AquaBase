import { Link } from "react-router-dom";
import FishMainInfo from "./FishMainInfo";
import type { Fish } from "../data/fishData";

type FishItemProps = {
	data: Fish;
};

export default function FishItem({ data }: FishItemProps) {
	return (
		<div className="bg-neutral-100 rounded-md text-sky-950 overflow-hidden [box-shadow:0_5px_5px_rgba(0,0,0,0.1)]">
			<Link to={`${data.name}`}>
				<div className="overflow-hidden">
					<img
						src={data.images[0]}
						alt={data.name}
						className="h-[400px] w-full object-cover hover:scale-[1.1] duration-500"
					/>
				</div>
				<h3 className="p-2 font-bold text-xl lg:text-2xl text-center text-title">
					{data.name}
				</h3>
			</Link>
			<FishMainInfo fishData={data} />
		</div>
	);
}
