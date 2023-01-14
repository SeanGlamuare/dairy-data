import React from "react";
import { contactModalState } from "../../ContactModal/atom/atom";
import { useRecoilState } from "recoil";

const Button = ({ full = false }: { full?: boolean }) => {
	const [contactModal, setContactModal] = useRecoilState(contactModalState);
	return (
		<div
			onClick={() => setContactModal(true)}
			className={` h-11 ${
				full ? "w-full" : "w-40"
			} text-white rounded-full cursor-pointer gradient-btn items-center flex justify-center hover:shadow-lg hover:shadow-black/25 active:scale-[.98]`}
		>
			Contact Us
		</div>
	);
};

export default Button;
