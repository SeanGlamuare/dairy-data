import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
	return (
		<div className="flex justify-center w-full px-0 mb-20 lg:px-20 text-neutral-700">
			<div className="flex flex-col-reverse justify-between w-full max-w-5xl gap-10 p-5 lg:flex-row 2xl:max-w-7xl rounded-3xl bg-neutral-100 ">
				<div className="flex justify-center overflow-hidden lg:w-1/2 rounded-3xl lg:justify-start 2xl:scale-x-110">
					<Image
						src="/Contact/contact1.png"
						width={500}
						height={700}
						alt="contact"
						className="object-cover rounded-3xl"
					/>
				</div>
				<div className="flex flex-col gap-4 lg:w-1/2">
					<div className="text-3xl font-bold">Contact Us</div>
					<p className="text-sm">
						Register your interest in Milk Recording with us here today.
						<p>Our team will be in touch as sson as possible</p>
					</p>
					<div className="">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
