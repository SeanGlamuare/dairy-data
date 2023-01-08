import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="w-full overflow-hidden h-[600px] relative">
			<div className="relative w-full h-full">
				<Image
					src={"/cow.jpg"}
					width={500}
					height={500}
					alt={"cows"}
					layout={"fill"}
				/>
			</div>
			<div className="absolute top-0 z-10 flex items-center justify-start w-full h-full px-20 text-white bg-gradient-to-r from-black/50 to-black/10">
				<div className="max-w-[50%] flex flex-col gap-10">
					<div className="text-6xl font-bold text-white ">
						The Future of Farming is Now
					</div>
					<div className="text-xl font-semibold">
						Our Professional team will assist you in making milk recording as
						hassle-free as possible through the use of our new Electronic Milk
						Meters
					</div>
					<div className="flex items-center gap-8 font-semibold">
						<div className="p-2 px-8 text-sm font-semibold text-black transition-all duration-100 bg-white rounded-full cursor-pointer active:shadow-none active:scale-[.98] hover:shadow-lg hover:shadow-black/25">
							Contact Us
						</div>
						<div className="p-2 px-8 text-sm transition-all duration-150 border border-white rounded-full active:scale-[.98] cursor-pointer hover:bg-white hover:text-black bg-trransparent">
							{" "}
							Our Products
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
