import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}
