import Image from "next/image";
import React from "react";

const reasons = [
	{
		id: 0,
		title: "Identify best and worst performing cows",
		body: "This allows for management decisions such as culling poor performers and breeding replacements from the best of the herd.",
		img: "why1",
	},
	{
		id: 1,
		title: "Increase compenstation available for cows",
		body: "Having milk recording records increases the compensation available for cows that have to be culled because of a positive TB reaction.",
		img: "why3",
	},
];

const reasons2 = [
	{
		id: 2,
		title: "Monitoring the SCC on each individual cow",
		body: "Lower your bulk tank SCC. Quickly identify cases of subclinical mastitis and get them treated straight away.",
		img: "why2",
	},

	{
		id: 3,
		title: "Get mastitis and dry cow tubes",
		body: "Milk Recording is mandatory to get mastitis and dry cow tubes - every farmer will need individual cow information to justify getting an antibiotic tube.",
		img: "why4",
	},
];

const Why = () => {
	return (
		<div
			id="Milk Recording"
			className="flex justify-center w-full gap-12 px-4 py-6 mt-4 overflow-hidden lg:mb-16 md:mt-14 md:px-10 lg:px-20 "
		>
			<div className="flex flex-col items-center justify-center w-full xl:max-w-6xl gap-y-12 2xl:max-w-7xl">
				<div className="w-full text-2xl text-left lg:text-4xl">
					<span className="font-bold ">Why</span> Milk Recording
				</div>
				<div className="flex flex-col w-full gap-x-4 lg:gap-x-16 md:flex-row gap-y-8 md:gap-y-28">
					<div className="flex flex-col gap-x-8 lg:gap-x-16 gap-y-8 md:gap-y-16">
						{reasons.map((reason: any) => {
							return (
								<div
									key={reason.id}
									className="flex items-start justify-center gap-y-4 lg:items-center md:gap-x-6 gap-x-4"
								>
									<div className="relative flex items-center justify-center h-16 w-[70px] lg:h-28 lg:w-28 ">
										<div className=" overflow-hidden p-0.5 border-2 border-blue-400 rounded-full realtive flex items-center lg:w-[105px] lg:h-[105px]">
											<Image
												src={`/why/${reason.img}.jpg`}
												width={120}
												height={120}
												alt="why"
												className="object-cover rounded-full"
											/>
										</div>
									</div>
									<div className="flex max-w-[70%] flex-col gap-2">
										<div className="flex xl:w-[410px] justify-start lg:text-xl xl:whitespace-nowrap font-bold">
											{reason.title}
										</div>
										<p className="text-left w-full md:w-[260px] text-sm xl:text-base flex justify-start xl:w-[400px] lg:h-[72px]">
											{reason.body}
										</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex flex-col gap-x-6 lg:gap-x-16 gap-y-8 md:gap-y-16">
						{reasons2.map((reason: any) => {
							return (
								<div
									key={reason.id}
									className="flex items-start justify-center gap-y-4 lg:items-center gap-x-4 md:gap-x-6"
								>
									<div className="relative flex items-center justify-center h-16 w-[70px] lg:h-24 lg:w-28 ">
										<div className=" overflow-hidden p-0.5 border-2 border-blue-400 rounded-full realtive flex items-center lg:w-[105px] lg:h-[105px]">
											<Image
												src={`/why/${reason.img}.jpg`}
												width={120}
												height={120}
												alt="why"
												className="object-cover rounded-full"
											/>
										</div>
									</div>
									<div className="flex max-w-[70%] flex-col gap-2">
										<div className="flex xl:w-[410px] justify-start lg:text-xl xl:whitespace-nowrap font-bold">
											{reason.title}
										</div>
										<p className="text-left md:w-[260px] text-sm xl:text-base flex justify-start xl:w-[400px] lg:h-[72px]">
											{reason.body}
										</p>
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
