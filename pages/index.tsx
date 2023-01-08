import type { NextPage } from "next";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
		</>
	);
};

export default Home;
