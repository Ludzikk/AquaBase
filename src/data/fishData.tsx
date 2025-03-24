type CommentAnswer = {
	answerName: string;
	answerMessage: string;
};

type Comment = {
	creatorName: string;
	creatorMessage: string;
	answers?: CommentAnswer[];
};

type Fish = {
	name: string;
	images: string[];
	video: string;
	phMin: number;
	phMax: number;
	tempMin: number;
	tempMax: number;
	sizeMin: number | null;
	sizeMax: number;
	minTankSize: number;
	mainInfo: string;
	info: string;
	comments?: Comment[];
};

const fishData: Fish[] = [
	{
		name: "Neon Inessa",
		images: [
			"/fishes/neoninessa/neoninessa-1.webp",
			"/fishes/neoninessa/neoninessa-2.webp",
			"/fishes/neoninessa/neoninessa-3.jpeg",
			"/fishes/neoninessa/neoninessa-4.avif",
		],
		video: "https://www.youtube.com/embed/B27J5vy46hw?si=sdpkzv45nL19HNm4",
		phMin: 5.5,
		phMax: 7.5,
		tempMin: 20,
		tempMax: 26,
		sizeMin: 3,
		sizeMax: 3.5,
		minTankSize: 54,
		mainInfo: `**The Neon Tetra** is one of the most popular aquarium fish, known for its vibrant colors and peaceful nature. It is a schooling fish that grows up to **4 cm (1.5 inches)**, making it ideal for community tanks.`,
		info: `## Habitat  
Neon Tetras originate from **South America**, inhabiting clear, slow-moving waters in the Amazon River basin, particularly in Brazil, Colombia, and Peru. They naturally live in dark, acidic waters filled with roots and leaf litter.  

## Characteristics and Temperament  
These fish are **calm and highly social**, thriving best in **groups of at least 10 individuals**. When kept alone or in small numbers, they can become stressed and less active. Their bright **blue and red coloration** makes them a stunning addition to any aquarium.  

## Diet and Feeding  
Neon Tetras are **omnivorous** but prefer small foods. Their diet should include **fine flakes, micro pellets, insect larvae, daphnia, and brine shrimp**. To enhance their coloration, it's beneficial to provide food rich in carotenoids.  

## Aquarium Requirements  
The minimum recommended tank size is **54 liters (14 gallons)**, with dark substrate, live plants, and hiding spots. Ideal water parameters: **temperature 22-26°C (72-79°F), pH 5.0-7.0**, soft and slightly acidic water. They prefer dim lighting, which can be achieved with floating plants.  

## Breeding  
Neon Tetras are challenging to breed in community tanks. They require **soft, acidic water (pH 5.0-6.0)** and a dark, shaded area for spawning. The female lays up to **100 eggs**, which the male fertilizes. After a few days, the larvae hatch and initially feed on microscopic food, such as infusoria.  `,
		comments: [
			{
				creatorName: "Rafał",
				creatorMessage: "Fajna ryba",
				answers: [
					{
						answerName: "Filip",
						answerMessage: "Glonojad lepszy",
					},
				],
			},
			{
				creatorName: "Rafał",
				creatorMessage: "Breeding occurs in caves or tubes, where the female lays eggs, and the male takes care of them, fanning them with his fins and guarding them against intruders. The eggs hatch within a few days, and the fry initially feed on their yolk sacs before consuming algae and plant-based food.  ",
				answers: [
					{
						answerName: "Filip",
						answerMessage: "Glonojad lepszy",
					},
					{
						answerName: "Filip",
						answerMessage: "Ciągnij sie",
					},
				],
			},
		],
	},
	{
		name: "Ancistrus Gold",
		images: [
			"/fishes/ancistrusgold/ancistrusgold-1.jpg",
			"/fishes/ancistrusgold/ancistrusgold-2.jpg",
			"/fishes/ancistrusgold/ancistrusgold-3.webp",
			"/fishes/ancistrusgold/ancistrusgold-4.jpg",
		],
		video: "https://www.youtube.com/embed/a2BPKCy-mqU?si=71O5ez4r2NshjDcl",
		phMin: 6,
		phMax: 7.5,
		tempMin: 21,
		tempMax: 26,
		sizeMin: null,
		sizeMax: 11,
		minTankSize: 54,
		mainInfo: `**The Golden Ancistrus** is a popular, peaceful bottom-dwelling fish from the Loricariidae family, valued for its ability to clean algae in aquariums. It is a color variation of the common bristlenose pleco (Ancistrus sp.), growing to about **10-12 cm** in length.`,
		info: `
## Habitat  
The Golden Ancistrus is a selectively bred variant and does not occur naturally in the wild. Its wild ancestor, the common bristlenose pleco, originates from the river basins of South America, particularly the Amazon.  

## Characteristics and Temperament  
This fish is calm and sociable, coexisting well with other species. Males develop distinctive, branched tentacles on their snouts, which are absent in females. It is primarily nocturnal and spends most of the day hiding in caves or among decorations.  

## Diet and Feeding  
Golden Ancistrus mainly feeds on algae and plant-based food but requires a varied diet for proper growth. It should be given algae wafers, vegetables (such as zucchini, cucumber, or carrots), and occasional protein-rich foods like frozen insect larvae.  

## Aquarium Requirements  
A minimum **54-liter** tank is recommended, with plenty of hiding spots such as roots, caves, and rocks. It thrives in water temperatures of **22-28°C (72-82°F)**, with a pH of **6.0-7.5**, and requires good aeration. Males can be territorial, especially towards each other.  

## Breeding  
Breeding occurs in caves or tubes, where the female lays eggs, and the male takes care of them, fanning them with his fins and guarding them against intruders. The eggs hatch within a few days, and the fry initially feed on their yolk sacs before consuming algae and plant-based food.  
`,
	},
];

export { fishData };
export type { Fish, Comment, CommentAnswer };
