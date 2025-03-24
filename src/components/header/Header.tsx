import Wrapper from "../Wrapper";

export default function Header() {
	return (
		<header>
			<div className="relative header-bg w-screen h-[70vh] flex items-center">
				<div className="absolute inset-0 bg-black/50"></div>
				<Wrapper>
					<div className="relative inset-0 z-[1] flex justify-center items-center text-white">
						<h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
							Check info about fish and <br /> create your perfect aquarium setup
						</h1>
					</div>
				</Wrapper>
			</div>
		</header>
	);
}
