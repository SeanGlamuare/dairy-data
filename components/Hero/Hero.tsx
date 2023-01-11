import Image from "next/image";
import React from "react";
import { contactModalState } from "../ContactModal/atom/atom";
import { useRecoilState } from "recoil";

const Hero = () => {
	const [contactModal, setContactModal] = useRecoilState(contactModalState);

	return (
		<div className="w-full overflow-hidden h-[800px] lg:h-[600px] 2xl:h-[800px] relative">
			<div className="relative w-full h-full">
				<Image
					src={"/cow.jpg"}
					width={500}
					height={500}
					alt={"cows"}
					objectFit={"cover"}
					layout={"fill"}
				/>
			</div>
			<div className="absolute top-0 z-10 flex items-center justify-center w-full h-full px-10 text-white lg:px-20 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-black/10">
				<div className="flex flex-col max-w-5xl gap-10 2xl:max-w-7xl">
					<div className="text-5xl lg:text-6xl lg:text-left text-center font-bold text-white max-w-full  lg:max-w-[50%]">
						The Future of Farming is Now
					</div>
					<div className="text-xl font-semibold max-w-full lg:text-left text-center lg:max-w-[50%]">
						Our Professional team will assist you in making milk recording as
						hassle-free as possible through the use of our new Electronic Milk
						Meters
					</div>
					<div className="flex flex-col items-center gap-8 font-semibold lg:flex-row">
						<div
							onClick={() => {
								setContactModal(true);
							}}
							className="p-2 px-8 text-sm font-semibold text-black transition-all duration-100 bg-white rounded-full cursor-pointer active:shadow-none active:scale-[.98] w-36 flex justify-center hover:shadow-lg hover:shadow-black/25"
						>
							Contact Us
						</div>
						{/* <div className="p-2 px-8 text-sm transition-all duration-150 border border-white rounded-full active:scale-[.98] cursor-pointer hover:bg-white hover:text-black bg-trransparent">
							{" "}
							Our Products
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
