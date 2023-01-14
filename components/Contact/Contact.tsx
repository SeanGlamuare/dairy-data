import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
	return (
		<div className="flex justify-center w-full px-0 mb-10 md:px-20 ">
			<div className="flex flex-col-reverse justify-between w-full max-w-6xl gap-10 p-5 lg:flex-row 2xl:max-w-7xl lg:rounded-[48px] bg-neutral-100 ">
				<div className="flex justify-center overflow-hidden lg:w-1/2 rounded-3xl lg:justify-start ">
					<Image
						src="/Contact/contact1.png"
						width={500}
						height={700}
						alt="contact"
						className="object-cover rounded-[48px]"
					/>
				</div>
				<div className="flex flex-col gap-4 lg:w-1/2">
					<div className="text-2xl font-bold md:text-3xl">Contact Us</div>
					<p className="hidden lg:block">
						Register your interest in Milk Recording with us here today.
						<p>Our team will be in touch as soon as possible</p>
					</p>
					<p className="pr-4 text-sm lg:hidden">
						Register your interest in Milk Recording with us here today.
						<> Our team will be in touch as soon as possible.</>
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
