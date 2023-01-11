import type { NextPage } from "next";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Why from "../components/Why/Why";
import Benefit from "../components/Benefit/Benefit";
import AboutMR from "../components/AboutMR/AboutMR";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ContactDialog from "../components/contactDialog/contactDialog";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Why />
			<Benefit />
			<ContactDialog />
			<AboutMR />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
