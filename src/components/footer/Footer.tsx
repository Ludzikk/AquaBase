import Wrapper from "../Wrapper";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-neutral-100">
			<Wrapper>
				<div className="flex flex-col md:flex-row items-center justify-between py-4">
					<span>{currentYear} &#169; AquaBase</span>
					<span className="flex items-center gap-1">
						Check more of my projects:{" "}
						<a
							href="https://github.com/Ludzikk"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Check out GitHub of aquabase creator">
							<FaGithub />
						</a>
					</span>
				</div>
			</Wrapper>
		</footer>
	);
}
