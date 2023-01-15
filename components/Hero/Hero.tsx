import Image from "next/image";
import React from "react";
import { contactModalState } from "../ContactModal/atom/atom";
import { useRecoilState } from "recoil";

const Hero = () => {
	const [contactModal, setContactModal] = useRecoilState(contactModalState);

	return (
		<div className="w-full overflow-hidden h-[800px] lg:h-[600px] 2xl:h-[1000px] relative">
			<div className="relative hidden w-full h-full lg:block">
				<Image
					src={"/front.png"}
					width={1500}
					height={500}
					quality={100}
					alt={"dairy data image"}
					objectFit={"cover"}
					layout={"fill"}
				/>
			</div>
			<div className="relative w-full h-full lg:hidden">
				<Image
					src={"/mobile_front.png"}
					width={500}
					height={500}
					quality={100}
					alt={"dairy data image"}
					objectFit={"cover"}
					layout={"fill"}
				/>
			</div>
			<div className="absolute top-0 z-10 flex items-end justify-center w-full h-full px-4 pb-20 text-white lg:pb-0 lg:items-center md:px-20 gradient-bg">
				<article className="flex flex-col max-w-6xl gap-y-4 gap-x-10 2xl:max-w-7xl">
					<div className="text-[40px] md:text-6xl xl:text-[88px] text-left font-bold text-white max-w-full  lg:max-w-[60%]">
						The Future of Farming is Now
					</div>
					<article className="xl:text-2xl md:text-xl  flex-nowrap lg:max-w-[45%]  max-w-[95%]">
						Our professional team will assist you in making milk recording as
						hassle-free as possible through the use of our new Electronic Milk
						Meters.
					</article>
					<div className="flex flex-col items-center gap-8 mt-2 font-semibold lg:text-justify lg:flex-row">
						<button
							onClick={() => {
								setContactModal(true);
							}}
							className="p-2 px-8 font-semibold text-black transition-all duration-100 bg-white rounded-full items-center cursor-pointer active:shadow-none active:scale-[.98] lg:w-40 h-11 flex justify-center hover:shadow-lg hover:shadow-black/25 w-full"
						>
							Contact Us
						</button>
						{/* <div className="p-2 px-8 text-sm transition-all duration-150 border border-white rounded-full active:scale-[.98] cursor-pointer hover:bg-white hover:text-black bg-trransparent">
							{" "}
							Our Products
						</div> */}
					</div>
				</article>
			</div>
		</div>
	);
};

export default Hero;
