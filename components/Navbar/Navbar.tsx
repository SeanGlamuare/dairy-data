import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const menu = [
	{ name: "Milk Recording" },
	{ name: "Benefits" },
	{ name: "About Us" },
];

const Navbar = () => {
	const [showSideMenu, setShowSideMenu] = useState<Boolean>(false);

	return (
		<div className="flex justify-center w-screen h-24 py-8 overflow-hidden bg-white xl:px-16 xl:h-32">
			<div className="flex justify-between w-full max-w-5xl 2xl:max-w-7xl">
				<div className="flex items-center justify-start w-full gap-2 title">
					<div>
						<Image alt={"logo"} src="/dairy_logo.png" width={75} height={75} />
					</div>
					<div className="font-serif text-xl uppercase lg:text-3xl">
						Dairy <span className="text-blue-500">Data</span>
					</div>
				</div>
				<div className="items-center hidden gap-5 pr-10 text-sm lg:flex">
					{menu.map((tab: { name: string }) => {
						return (
							<div
								key={tab.name}
								className="flex justify-center font-semibold cursor-pointer w-28 hover:underline hover:underline-offset-2"
							>
								{tab.name}
							</div>
						);
					})}
					<div className="p-2 px-8 text-white rounded-full cursor-pointer bg-gradient-to-b from-neutral-600 w-36 flex justify-center to-neutral-900 hover:shadow-lg hover:shadow-black/25 active:scale-[.97]">
						Contact Us
					</div>
				</div>
				<div
					onClick={() => setShowSideMenu(true)}
					className="flex items-center pr-10 text-2xl lg:hidden"
				>
					<GiHamburgerMenu />
				</div>

				<div
					className={` ${
						showSideMenu ? "left-1/4  " : " left-full "
					} fixed  box-border w-[75vw] bg-white top-0 overflow-hidden transition-all duration-500 z-50 lg:hidden shadow-lg shadow-black/40 h-screen`}
				>
					<div className="flex flex-col w-full gap-16 px-8 py-6">
						<div className="flex justify-end w-full">
							<ImCross onClick={() => setShowSideMenu(false)} />
						</div>
						<div className="flex flex-col gap-y-6">
							{menu.map((tab: { name: string }) => {
								return (
									<div
										key={tab.name}
										onClick={() => {
											setShowSideMenu(false);
										}}
										className="flex justify-center w-full p-2 text-lg font-semibold cursor-pointer"
									>
										{tab.name}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
