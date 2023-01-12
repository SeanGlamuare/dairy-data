import type { NextPage } from "next";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Why from "../components/Why/Why";
import Benefit from "../components/Benefit/Benefit";
import AboutMR from "../components/AboutMR/AboutMR";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ContactDialog from "../components/contactDialog/contactDialog";
import ContactModal from "../components/ContactModal/ContactModal";
import { contactModalState } from "../components/ContactModal/atom/atom";
import { useRecoilState } from "recoil";
import ContactSuccess from "../components/ContactSuccess/ContactSuccess";

const Home: NextPage = () => {
	const [contactModal, setContactModal] = useRecoilState(contactModalState);

	return (
		<>
			<div
				className={`flex flex-col gap-1 ${contactModal && "hidden md:block"} `}
			>
				<Navbar />
				<Hero />
				<Why />
				<Benefit />
				<ContactDialog />
				<AboutMR />
				<Contact />
				<Footer />
				<ContactSuccess />
			</div>
			<ContactModal />
		</>
	);
};

export default Home;
