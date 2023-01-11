import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Button from "../Contact/Button/Button";
import Link from "next/link";

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
								<a href={`#${tab.name}`}>{tab.name}</a>
							</div>
						);
					})}
					<Button />
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
						<div className="flex flex-col gap-y-8">
							{menu.map((tab: { name: string }) => {
								return (
									<div
										key={tab.name}
										onClick={() => {
											setShowSideMenu(false);
										}}
										className="flex justify-center w-full p-2 text-lg font-semibold border-b cursor-pointer tex"
									>
										<a href={`#${tab.name}`}>{tab.name}</a>
									</div>
								);
							})}
							<div className="flex justify-center w-full">
								<Button />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
