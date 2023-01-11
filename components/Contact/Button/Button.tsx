import React from "react";
import { contactModalState } from "../../ContactModal/atom/atom";
import { useRecoilState } from "recoil";
const Button = () => {
	const [contactModal, setContactModal] = useRecoilState(contactModalState);
	return (
		<div
			onClick={() => setContactModal(true)}
			className="p-2 px-8 text-white rounded-full cursor-pointer bg-gradient-to-b from-neutral-600 w-36 flex justify-center to-neutral-900 hover:shadow-lg hover:shadow-black/25 active:scale-[.97]"
		>
			Contact Us
		</div>
	);
};

export default Button;
