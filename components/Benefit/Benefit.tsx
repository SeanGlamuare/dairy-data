import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

const benefits = [
	{
		id: 0,
		benefit: "Identify your poor performing cows",
	},
	{
		id: 1,
		benefit: "Identify high SCC cows - especially at an early stage",
	},
	{
		id: 2,
		benefit: "Inform management decisions on breeding & culling",
	},
	{
		id: 3,
		benefit: "Improve overall herd genetics",
	},
	{
		id: 4,
		benefit: "Increase the value of your herd",
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
		<div className="flex justify-center w-full h-full px-20 mb-10 mt-28 text-neutral-800">
			<div className="flex justify-around w-full max-w-5xl gap-2 2xl:max-w-7xl">
				<div className="flex justify-center w-1/2 gap-2 overflow-hidden lg:justify-start rounded-3xl">
					<Image
						alt={"benefit"}
						src="/benefit/benefit1.png"
						width={450}
						height={500}
						className={"rounded-3xl object-cover scale-x-95 xl:scale-100"}
					/>
				</div>
				<div className="flex flex-col w-1/2 gap-8">
					<div className="text-4xl">
						<span className="font-bold ">Benefit of</span> Milk Recording
					</div>
					<div className="flex flex-col gap-1">
						{benefits.map((benefit: any) => {
							return (
								<div
									onClick={() => setChosenBenefit(benefit.id)}
									key={benefit.id}
									className={`${
										chosenBenefit === benefit.id ? "h-32" : "h-16"
									}  overflow-hidden transition-all duration-500 justify-center `}
								>
									<div
										className={`${
											chosenBenefit === benefit.id && "h-32"
										} flex w-full  gap-2`}
									>
										<>
											<div className="flex items-center justify-start w-8 h-16">
												<div
													className={`${
														chosenBenefit === benefit.id
															? "border-none bg-blue-500 text-white"
															: "border border-black/60"
													} flex items-center justify-center w-4 h-4 border rounded-full text-xs font-light`}
												>
													<TiTick />
												</div>
											</div>
										</>
										<div className="flex flex-col gap-1 pt-4 border-b w-[90%] border-black/10">
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
												<div className="text-sm font-semibold text-neutral-600">
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Pariatur sed dignissimos nihil, consectetur
													dolore doloribus
												</div>
											)}
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
