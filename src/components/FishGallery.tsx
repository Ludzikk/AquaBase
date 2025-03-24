import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import FishSectionTitle from "./FishSectionTitle";

import type { Fish } from "../data/fishData";

type FishGalleryProps = {
	fishData: Fish;
};

export default function FishGallery({ fishData }: FishGalleryProps) {
	const imagesEl = fishData?.images.map((img, index) => {
		return (
			<PhotoView src={img} key={`${fishData.name}-${index}`}>
				<img
					src={img}
					alt={fishData.name}
					className="h-[250px] w-full object-cover rounded-md cursor-pointer hover:scale-[1.01] duration-300"
				/>
			</PhotoView>
		);
	});

	return (
		<div>
			<FishSectionTitle>Gallery</FishSectionTitle>
			<div className="grid md:grid-cols-2 gap-2">
				<PhotoProvider>{imagesEl}</PhotoProvider>
			</div>
		</div>
	);
}
