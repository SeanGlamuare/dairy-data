import React from "react";
import ContactForm from "../Contact/ContactForm/ContactForm";
import { FaCross } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { contactModalState } from "./atom/atom";
import { useRecoilState } from "recoil";

const ContactModal = () => {
	const [contactModal, setContactModal] = useRecoilState(contactModalState);

	return (
		<>
			{contactModal && (
				<div className="md:fixed absolute bg-white   flex justify-center items-center top-0 z-[100] left-0 w-screen md:h-screen  md:bg-black/40">
					<div className="w-full   z-[200] max-w-xl px-10 py-10 overflow-y-auto bg-white drop-shadow-lg shadow-lg md:rounded-3xl shadow-black/30">
						<div className="relative flex flex-col gap-4">
							<div
								className="flex justify-end w-full cursor-pointer hover:text-red-500"
								onClick={() => setContactModal(false)}
							>
								<ImCross />
							</div>
							<div className="text-3xl font-bold">Contact Us</div>
							<p className="flex text-sm">
								Register your interest in Milk Recording with us here today.
								<> Our team will be in touch as soon as possible</>
							</p>
							<ContactForm />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactModal;
