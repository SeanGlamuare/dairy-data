import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

const benefits = [
	{
		id: 0,
		benefit: "Identify your poor performing cows",
		detail:
			"The production summary report outltines the key milking performance figures for reach individual cow. Your most profitable and least profitable cows are easily identified by the Margin Per Day breakdown.",
	},
	{
		id: 1,
		benefit: "Identify high SCC cows",
		detail:
			"Identify high SCC cows at an early stage. Cows are categorised into four groups on our Production Report. Remember, more milk is produced from low SCC cows.",
	},
	{
		id: 2,
		benefit: "Inform management decisions on breeding & culling",
		detail:
			"Select which cows to cull in the herd and which cows to breed from. Your cows are ranked and colour coded according to Top 20% green and Bottom 20% red.",
	},
	{
		id: 3,
		benefit: "Improve overall herd genetics",
		detail:
			"Allowing farmers to select the correct bull for a specific cow. By breeding from the best you are simultaneously improving your herd genetics.",
	},
	{
		id: 4,
		benefit: "Increase the value of your herd",
		detail:
			"Receive more bonus' on your milk price by lowering your SCC value while also increasing the milk solids per cow. Having the milk recording records will also increase the value of your cow when it comes to a sale.",
	},
];

const Benefit = () => {
	const [chosenBenefit, setChosenBenefit] = useState<number>(0);

	return (
		<div
			id="Benefits"
			className="flex justify-center w-full h-full px-6 mt-12 mb-10 md:px-20 md:mt-28"
		>
			<div className="flex flex-col justify-around w-full max-w-6xl gap-2 gap-x-12 gap-y-0 lg:flex-row 2xl:max-w-7xl">
				<div className="mb-8 text-2xl text-left lg:hidden">
					<span className="w-full font-bold">Benefits of</span> Milk Recording
				</div>
				<div className="justify-center hidden w-1/2 overflow-visible xl:flex lg:justify-start rounded-3xl">
					<Image
						alt={"benefit"}
						src="/benefit/benefit1.png"
						width={480}
						height={500}
						className={"rounded-3xl object-cover scale-x-95 xl:scale-100"}
					/>
				</div>
				<div className=" w-[100%] justify-center my-auto overflow-visible xl:hidden flex lg:justify-start rounded-3xl">
					<Image
						alt={"benefit"}
						src="/benefit/benefit1.png"
						width={300}
						height={350}
						className={"rounded-3xl object-cover scale-x-95 xl:scale-100"}
					/>
				</div>
				<div className="flex flex-col gap-8 xl:w-[60%]">
					<div className="text-[40px] text-center hidden lg:block lg:text-left">
						<span className="w-full font-bold">Benefits of</span> Milk Recording
					</div>
					<div className="flex flex-col gap-1">
						{benefits.map((benefit: any) => {
							return (
								<>
									<div
										onClick={() => setChosenBenefit(benefit.id)}
										className={` flex gap-4 pt-4 pb-4 border-b lg:hidden border-black/10`}
									>
										<div>
											<div
												className={` ${
													chosenBenefit === benefit.id &&
													"bg-blue-500 text-white border-none"
												} p-0.5 border rounded-full w-6 flex items-center justify-center h-6 border-neutral-500`}
											>
												<TiTick />
											</div>
										</div>
										<div className={`flex flex-col gap-2`}>
											<div
												className={`font-bold ${
													chosenBenefit === benefit.id && "text-blue-500 "
												}`}
											>
												{benefit.benefit}
											</div>
											<div className="text-sm leading-5">{benefit.detail}</div>
										</div>
									</div>
									<div
										onClick={() => setChosenBenefit(benefit.id)}
										key={benefit.id}
										className={`${
											chosenBenefit === benefit.id ? "h-36" : "h-20"
										}   transition-all hidden lg:flex pt-6 overflow-hidden duration-500 cursor-pointer  justify-left gap-x-6 w-full`}
									>
										<div>
											<div
												className={` ${
													chosenBenefit === benefit.id &&
													"bg-blue-500 text-white border-none"
												} p-0.5 border rounded-full w-6 flex items-center justify-center h-6 border-neutral-500`}
											>
												<TiTick />
											</div>
										</div>
										<div className={`flex flex-col g border-b`}>
											<div
												className={`font-bold xl:whitespace-nowrap text-lg xl:text-xl ${
													chosenBenefit === benefit.id && "text-blue-500 "
												}`}
											>
												{benefit.benefit}
											</div>
											{chosenBenefit === benefit.id && (
												<div className="text-sm xl:text-base">
													{benefit.detail}
												</div>
											)}
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefit;
