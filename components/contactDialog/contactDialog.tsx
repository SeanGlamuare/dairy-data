import Image from "next/image";
import React from "react";
import Button from "../Contact/Button/Button";

const ContactDialog = () => {
	return (
		<div className="flex justify-center w-full px-0 mt-6 md:mt-20 md:px-20">
			<div className="flex flex-col items-center justify-between w-full max-w-6xl p-6 2xl:max-w-7xl lg:flex-row bg-neutral-100 md:rounded-2xl gap-y-8 ">
				<div className="flex items-start gap-4 lg:items-center">
					<div className="w-40 lg:w-max">
						<Image
							src="/contactDialog/cd1.png"
							width={90}
							height={90}
							className="object-cover rounded-full min-w-[100px]"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="font-bold lg:text-xl">
							Interested in registering for Milk Recording?
						</div>
						<div className="hidden lg:flex-col lg:flex">
							Register your interest with us here today.
							<p>Our team will be in touch as soon as possible.</p>
						</div>
						<div className="flex lg:flex-col lg:hidden">
							Register your interest with us here today.
							<>Our team will be in touch as soon as possible.</>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-40">
					<Button full={true} />
				</div>
			</div>
		</div>
	);
};

export default ContactDialog;
