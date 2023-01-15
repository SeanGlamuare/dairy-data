import React from "react";
import { useRecoilState } from "recoil";
import { contactErrorState, contactSuccessState } from "../Contact/atom/atom";
import { TiTick } from "react-icons/ti";

const ContactError = () => {
	const [contactError, setContactError] = useRecoilState(contactErrorState);

	if (contactError) {
		setTimeout(() => setContactError(false), 5000);
	}

	return (
		<>
			{contactError && (
				<div className="z-[100] contactSuccess fixed flex items-end justify-center w-screen h-screen">
					<div className="flex items-center gap-2 px-3 mb-10 bg-white border-l-4 sm:border-l-8 border-red-600 rounded shadow-xl md:gap-4 h-14 shadow-black/50 drop-shadow-lg w-80 md:w-[400px]">
						<div>
							<div className="flex items-center justify-center p-1 text-xl font-bold text-red-600 border rounded-full w-7 h-7 sm:w-8 sm:h-8 border-red-600/80">
								!
							</div>
						</div>
						<div className="text-xs font-semibold text-red-500 md:text-base">
							Something went wrong. Please try again!
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactError;
