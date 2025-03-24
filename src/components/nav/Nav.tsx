import Button from "../Button.js";
import Wrapper from "../Wrapper.js";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="fixed top-0 left-0 w-screen border-b border-gray-300 bg-white z-10">
			<Wrapper>
				<div className="flex justify-between items-center py-4">
					<Link to="/">AquaBase</Link>
					<Button>Check stock</Button>
				</div>
			</Wrapper>
		</nav>
	);
}
