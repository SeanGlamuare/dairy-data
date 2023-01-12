import React from "react";
import { useRecoilState } from "recoil";
import { contactSuccessState } from "../Contact/atom/atom";
import { TiTick } from "react-icons/ti";

const ContactSuccess = () => {
	const [contactSuccess, setContactSuccess] =
		useRecoilState(contactSuccessState);

	if (contactSuccess) {
		setTimeout(() => setContactSuccess(false), 5000);
	}

	return (
		<>
			{contactSuccess && (
				<div className="z-[100] contactSuccess fixed flex items-end justify-center w-screen h-screen">
					<div className="flex items-center gap-4 px-4 mb-10 bg-white border-l-8 rounded shadow-xl md:gap-8 h-14 shadow-black/50 border-neutral-800 drop-shadow-lg w-80 md:w-96">
						<div>
							<div className="p-1 text-xl text-green-600 border rounded-full border-green-600/80">
								<TiTick />
							</div>
						</div>
						<div className="text-sm font-semibold md:text-base">
							Our staff will contact you shortly!
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactSuccess;
