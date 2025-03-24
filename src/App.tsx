import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import FishPage from "./components/pages/FishPage";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path=":name" element={<FishPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
