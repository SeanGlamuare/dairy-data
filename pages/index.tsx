import type { NextPage } from "next";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Why from "../components/Why/Why";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Why />
		</>
	);
};

export default Home;
