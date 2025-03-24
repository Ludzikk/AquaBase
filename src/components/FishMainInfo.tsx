import { GiFlatfish } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { FaTemperatureEmpty } from "react-icons/fa6";

import type { Fish } from "../data/fishData";

type FishMainInfoProps = {
	fishData: Fish;
};

export default function FishMainInfo({ fishData }: FishMainInfoProps) {
	return (
		<div className="flex justify-center flex-wrap gap-8 py-4 text-gray-700">
			<span className="flex items-center gap-1">
				<IoIosWater className="text-xl" />
				{fishData.phMin} - {fishData.phMax} pH
			</span>
			<span className="flex items-center gap-1">
				<FaTemperatureEmpty className="text-xl" />
				{fishData.tempMin} - {fishData.tempMax} C
			</span>
			<span className="flex items-center gap-1">
				<GiFlatfish className="text-2xl" />
				{fishData.sizeMin ? `${fishData.sizeMin} - ` : null}
				{fishData.sizeMax} cm
			</span>
			<span className="flex items-center gap-1">
				<BsBox className="text-xl" />
				{fishData.minTankSize} L
			</span>
		</div>
	);
}
