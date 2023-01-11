import Image from "next/image";
import React from "react";
import Button from "../Contact/Button/Button";

const ContactDialog = () => {
	return (
		<div className="flex justify-center w-full px-0 lg:px-20">
			<div className="flex flex-col items-center justify-between w-full px-6 py-4 lg:flex-row bg-neutral-100 rounded-3xl gap-y-8 text-neutral-800">
				<div className="flex items-center gap-4">
					<div className="w-40 lg:w-max">
						<Image
							src="/contactDialog/cd1.png"
							width={80}
							height={80}
							className="object-cover rounded-full min-w-[100px]"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="font-bold">
							Interested in registering for Milk Recording?
						</div>
						<div className="flex text-sm lg:flex-col">
							Register your interest with us here today.
							<>Our team will be in touch as sooon as possible</>
						</div>
					</div>
				</div>
				<div>
					<Button />
				</div>
			</div>
		</div>
	);
};

export default ContactDialog;
