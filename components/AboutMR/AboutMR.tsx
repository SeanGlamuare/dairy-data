import Image from "next/image";
import React from "react";

const AboutMR = () => {
	return (
		<div className="flex justify-center w-full mt-24 mb-20 text-neutral-800">
			<div className="flex items-center justify-between w-full max-w-5xl gap-6 2xl:max-w-7xl">
				<div className="flex flex-col w-[50%] gap-10 justify-start h-full">
					<div className="text-4xl">
						<span className="font-bold">About</span> Milk Recording
					</div>
					<div className="flex flex-col gap-4 text-sm font-semibold text-neutral-600">
						<p>
							Research has shown that farmers who milk record see clear benefits
							in animal health and economic performance
						</p>
						<p>
							On average, milk recording increases gross margin by €42 per cow,
							the milk yield by 406 litres per cow and reduces herd somatic cell
							count(SCC) by 38,860 cells/ml on average.
						</p>
						<p>
							In percentages, milk recording results in a significant
							improvement of
							<ul className="pl-8 list-disc">
								<li>4% in gross margins</li>
								<li>7% in milk yields</li>
								<li>25% reduction in SCC</li>
							</ul>
						</p>
						<p>
							Therefore by achieving such beneficial gains you are improving the
							product quality, increasing your output while most importantly
							increasing gross margins on your farm.
						</p>
					</div>
				</div>
				<div className="flex justify-end w-1/2 overflow-hidden rounded-3xl">
					<Image
						src="/aboutmr/aboutmr1.png"
						width={420}
						height={420}
						className="rounded-3xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMR;