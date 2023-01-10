import Image from "next/image";
import React from "react";

const reasons = [
	{
		id: 0,
		title: "Track your best and worst producing cows",
		body: "This allows for management decisions such as culling poor performers and breeding replacements from the best of the herd",
		img: "why1",
	},
	{
		id: 1,
		title: "Monitoring the SCC on each individual cow",
		body: "allows you to quickly identify cases of subclinical mastitis and get them treated right away",
		img: "why2",
	},
	{
		id: 2,
		title: "Increase compenstation available for cows",
		body: "Having milk recording records increases the compensation available for cows that have to be culled because of a positive TB reaction",
		img: "why3",
	},
	{
		id: 3,
		title: "Get mastitis and dry cow tubes",
		body: "Milk Recording is mandatory to get mastitis and dry cow tubes - every farmer will need individual cow information to justify getting an antibiotic tube",
		img: "why4",
	},
];

const Why = () => {
	return (
		<div className="flex justify-center w-full gap-12 px-8 py-6 mt-20 lg:px-20 text-neutral-700">
			<div className="flex flex-col items-center justify-center w-full max-w-5xl gap-y-12 2xl:max-w-7xl">
				<div className="w-full text-4xl">
					<span className="font-bold">Why</span> Milk Recording
				</div>
				<div className="">
					<div className="flex flex-wrap gap-x-14 gap-y-8">
						{reasons.map((reason: any) => {
							return (
								<div
									key={reason.id}
									className="flex items-center lg:items-start gap-x-4 lg:gap-x-10 space-y-4 lg:w-[45%]"
								>
									<div className="relative flex items-center justify-center h-32 w-36 ">
										<div className=" overflow-hidden p-0.5 border-2 border-blue-400 rounded-full realtive w-24 h-24 lg:w-[105px] lg:h-[105px]">
											<Image
												src={`/why/${reason.img}.jpg`}
												width={120}
												height={120}
												alt="why"
												className="object-cover rounded-full"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4">
										<div className="font-bold">{reason.title}</div>
										<div className="text-sm font-semibold text-neutral-500">
											{reason.body}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Why;
