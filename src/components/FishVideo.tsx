import FishSectionTitle from "./FishSectionTitle";

type FishVideoProps = {
	videoLink: string
}

export default function FishVideo({ videoLink }: FishVideoProps) {
	return (
		<div>
			<FishSectionTitle>Video</FishSectionTitle>
			<iframe
				width="100%"
				height="315"
				src={videoLink}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
		</div>
	);
}
