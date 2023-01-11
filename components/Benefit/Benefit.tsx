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
		benefit: "Identify high SCC cows - especially at an early stage",
		detail:
			"Identify high SCC cows at an early stage. Cows are categorised into four groups on our Production report Remembeer, more milk is produced from low SCC cows.",
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
			"Receive more bonus' on your milk price by lowering your SCC value while also increasing the milks solids per cow. Having the milk recording records will also increase the value of your cow when it comes to a sale.",
	},
];

const Benefit = () => {
	const [chosenBenefit, setChosenBenefit] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(
			() => setChosenBenefit((prev) => (prev + 1) % 5),
			3000
		);

		return () => clearInterval(interval);
	});

	return (
		<div
			id="Benefits"
			className="flex justify-center w-full h-full px-10 mb-10 lg:px-20 mt-28 text-neutral-800"
		>
			<div className="flex flex-col justify-around w-full max-w-5xl gap-2 gap-y-10 lg:flex-row 2xl:max-w-7xl">
				<div className="flex justify-center overflow-hidden lg:w-1/2 lg:justify-start rounded-3xl">
					<Image
						alt={"benefit"}
						src="/benefit/benefit1.png"
						width={450}
						height={500}
						className={"rounded-3xl object-cover scale-x-95 xl:scale-100"}
					/>
				</div>
				<div className="flex flex-col gap-8 lg:w-1/2">
					<div className="text-4xl text-center lg:text-left">
						<span className="w-full font-bold">Benefit of</span> Milk Recording
					</div>
					<div className="flex flex-col gap-1">
						{benefits.map((benefit: any) => {
							return (
								<div
									onClick={() => setChosenBenefit(benefit.id)}
									key={benefit.id}
									className={`${
										chosenBenefit === benefit.id
											? "h-[170] lg:h-32"
											: "lg:h-16 h-[170px]"
									}  overflow-hidden transition-all duration-500  justify-center `}
								>
									<div
										className={`${
											chosenBenefit === benefit.id && "h-40"
										} flex w-full h-[170px] lg:h-max  gap-2`}
									>
										<>
											<div className="flex items-center justify-start w-8 h-16">
												<div
													className={`${
														chosenBenefit === benefit.id
															? "border-none bg-blue-500 text-white"
															: "border border-black/60"
													} flex items-center justify-center w-4 h-4  rounded-full text-xs font-light`}
												>
													<TiTick />
												</div>
											</div>
										</>
										<div className="flex flex-col gap-1 pt-4 pb-1 border-b w-[90%] border-black/2f0">
											<div
												className={`font-bold ${
													chosenBenefit === benefit.id
														? "text-blue-500"
														: "cursor-pointer"
												} `}
											>
												{benefit.benefit}
											</div>
											{chosenBenefit == benefit.id && (
												<div className="hidden text-sm font-semibold lg:block text-neutral-600">
													{benefit.detail}
												</div>
											)}
											<div className="pb-2 text-sm font-semibold lg:hidden text-neutral-600">
												{benefit.detail}
											</div>
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

export default Benefit;
