import FishItem from "../FishItem";
import { fishData } from "../../data/fishData";
import Wrapper from "../Wrapper";
import Header from "../header/Header";

export default function Main() {
	const allFishEl = fishData.map((fish) => {
		return <FishItem key={fish.name} data={fish} />;
	});
	return (
		<>
			<Header />
			<main>
				<Wrapper>
					<section>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
							{allFishEl}
						</div>
					</section>
				</Wrapper>
			</main>
		</>
	);
}
