import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import { useParams } from "react-router-dom";
import { fishData } from "../../data/fishData";
import ReactMarkdown from "react-markdown";
import FishMainInfo from "../FishMainInfo";
import Button from "../Button";
import FishGallery from "../FishGallery";
import FishVideo from "../FishVideo";
import OtherFishes from "../OtherFishes";
import FishComments from "../FishComments";
import type { Fish } from "../../data/fishData";

export default function FishPage() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [currentFish, setCurrentFish] = useState<Fish | null>(null);
	const { name } = useParams();

	useEffect(() => {
		function resizeScreen() {
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener("resize", resizeScreen);

		return function () {
			window.removeEventListener("resize", resizeScreen);
		};
	}, []);

	useEffect(() => {
		const getCurrentFish = fishData.find((fish) => fish.name === name);

		if (getCurrentFish) {
			setCurrentFish(getCurrentFish);
		}
	}, [name]);
	return (
		<main className="flex-1">
			<Wrapper>
				<section className="pt-25 pb-10">
					{currentFish ? (
						<>
							<>
								<div className="grid lg:grid-cols-2 gap-6">
									<div>
										<img
											src={currentFish.images[0]}
											alt={currentFish.name}
											className="max-h-[400px] w-full object-cover rounded-lg"
										/>
									</div>
									<div className="flex flex-col justify-center items-center">
										<h1 className="font-bold text-2xl text-title mb-2 text-center">
											{currentFish.name}
										</h1>
										<FishMainInfo fishData={currentFish} />
										<div className="max-w-[700px] mx-auto pb-4">
											<ReactMarkdown>{currentFish.mainInfo}</ReactMarkdown>
										</div>
										<Button>Add to stock</Button>
									</div>
								</div>
								<div className="grid lg:grid-cols-2 gap-6">
									<div className="lg:pt-4 max-w-[700px] w-full mx-auto lg:mx-0">
										<div className="markdown">
											<ReactMarkdown>{currentFish.info}</ReactMarkdown>
										</div>
										{screenWidth >= 1024 ? <FishComments /> : null}
									</div>
									<div className="flex flex-col gap-6 max-w-[700px] w-full mx-auto lg:mx-0">
										<FishVideo videoLink={currentFish.video} />
										<FishGallery fishData={currentFish} />
										<OtherFishes />
										{screenWidth < 1024 ? <FishComments /> : null}
									</div>
								</div>
							</>
						</>
					) : null}
				</section>
			</Wrapper>
		</main>
	);
}
