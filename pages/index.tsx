import type { NextPage } from "next";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Why from "../components/Why/Why";
import Benefit from "../components/Benefit/Benefit";
import AboutMR from "../components/AboutMR/AboutMR";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Why />
			<Benefit />
			<AboutMR />
			<Contact />
		</>
	);
};

export default Home;
