import Image from "next/image";
import React from "react";

const benefits = [
	{
		id: 0,
		benefit: "Identify your poor per",
	},
];

const Benefit = () => {
	return (
		<div className="w-full h-full px-20 mt-16 text-neutral-800">
			<div className="flex justify-around max-w-5xl 2xl:max-w-7xl">
				<div className="flex justify-center w-1/2 overflow-hidden rounded-3xl">
					<Image
						alt={"benefit"}
						src="/benefit/benefit1.png"
						width={400}
						height={450}
						fill
						className={"rounded-3xl object-cover"}
					/>
				</div>
				<div className="flex flex-col w-1/2">
					<div className="text-4xl">
						<span className="font-bold ">Benefit of</span> Milk Recording
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefit;
