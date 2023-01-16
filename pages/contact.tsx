import React, { useEffect } from "react";
import ContactModal from "../components/ContactModal/ContactModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { contactModalState } from "../components/ContactModal/atom/atom";
import { useRouter } from "next/router";

const Contact = () => {
	const contactModal = useRecoilValue(contactModalState);
	const router = useRouter();

	console.log(contactModal);

	useEffect(() => {}, []);

	return (
		<div className="w-full h-full bg-red-500">
			<ContactModal />
		</div>
	);
};

export default Contact;
