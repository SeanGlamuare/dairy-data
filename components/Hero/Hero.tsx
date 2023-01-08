import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="w-full overflow-hidden h-[600px] 2xl:h-[800px] relative">
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
			<div className="absolute top-0 z-10 flex items-center justify-center w-full h-full px-20 text-white bg-gradient-to-r from-black/50 to-black/10">
				<div className="flex flex-col max-w-5xl gap-10 2xl:max-w-7xl">
					<div className="text-6xl font-bold text-white  max-w-[50%]">
						The Future of Farming is Now
					</div>
					<div className="text-xl font-semibold max-w-[50%]">
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
