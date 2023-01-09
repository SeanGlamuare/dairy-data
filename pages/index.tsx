import type { NextPage } from "next";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Why from "../components/Why/Why";
import Benefit from "../components/Benefit/Benefit";
import AboutMR from "../components/AboutMR/AboutMR";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Why />
			<Benefit />
			<AboutMR />
		</>
	);
};

export default Home;
