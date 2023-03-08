import Image from "next/image";
import React from "react";

const AboutMR = () => {
	return (
		<div
			id="About-Us"
			className="flex justify-center w-full px-4 mt-10 mb-12 md:mb-20 md:mt-24 md:px-20 "
		>
			<div className="flex flex-col items-center w-full max-w-6xl gap-2 gap-y-10 lg:justify-between gap-x-6 lg:flex-row 2xl:max-w-7xl">
				<article className="flex flex-col md:gap-14 lg:w-[50%] gap-4 justify-start h-max">
					<h1 className="text-2xl lg:text-[40px] text-left">
						<span className="font-bold">About</span> Milk Recording
					</h1>
					<div className="flex flex-col gap-4 text-sm text-black lg:text-base">
						<p>
							Research has shown that farmers who milk record see clear benefits
							in animal health and economic performance
						</p>
						<p>
							On average, milk recording increases gross margin by €42 per cow,
							the milk yield by 406 litres per cow and reduces herd somatic cell
							count(SCC) by 38,860 cells/ml on average.
						</p>
						<div>
							In percentages, milk recording results in a significant
							improvement of
							<ul className="pl-8 list-disc">
								<li>4% in gross margins</li>
								<li>7% in milk yields</li>
								<li>25% reduction in SCC</li>
							</ul>
						</div>
						<p>
							Therefore by achieving such beneficial gains you are improving the
							product quality, increasing your output while most importantly
							increasing gross margins on your farm.
						</p>
					</div>
				</article>
				<div className="relative flex justify-end lg:w-1/2 rounded-3xl">
					<div className="relative flex justify-center">
						<Image
							src="/aboutmr/aboutmr1.png"
							width={520}
							height={520}
							className=" rounded-[48px] z-10"
						/>
						<div className=" hidden xl:flex justify-center absolute left-10 top-10 bg-neutral-100 rounded-[48px] w-[530px] h-[530px] "></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMR;
