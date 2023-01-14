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
		<div className="flex justify-center w-screen py-8 overflow-hidden bg-white h-14 md:h-20 md:pl-4 xl:px-16 lg:pl-0 lg:h-24 xl:h-32">
			<nav className="flex justify-between w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
				<div className="flex items-center justify-start w-full gap-2 pl-4 title">
					<div className="items-center hidden w-max h-max xl:flex">
						<Image
							alt={"dairy data logo"}
							src="/logo.png"
							width={80.16}
							height={83}
							className="hidden lg:block"
						/>
					</div>
					<div className="flex items-center w-max h-max xl:hidden">
						<Image
							alt={"dairy data logo"}
							src="/logo.png"
							width={40.16}
							height={43}
							className="hidden lg:block"
						/>
					</div>
					<h1 className="text-lg tracking-widest md:text-2xl font-semibold leading-3 uppercase xl:text-[28px]">
						Dairy <span className="text-blue-500">Data</span>
					</h1>
				</div>
				<div className="items-center hidden gap-5 pr-10 lg:flex">
					{menu.map((tab: { name: string }) => {
						return (
							<div
								key={tab.name}
								className="flex duration-[0] justify-center w-max min-w-[110px] font-medium whitespace-nowrap text-black/80 hover:text-black transition-all ease-out cursor-pointer xl:text-base text-sm hover:font-[600] "
							>
								<a href={`#${tab.name}`}>{tab.name}</a>
							</div>
						);
					})}
					<Button />
				</div>
				<div
					onClick={() => setShowSideMenu(true)}
					className="flex items-center pr-4 text-2xl md:pr-10 lg:hidden"
				>
					<GiHamburgerMenu />
				</div>

				<div
					className={` ${
						showSideMenu ? "left-0  " : " left-full "
					} fixed  box-border w-[100vw] bg-white top-0 overflow-hidden transition-all duration-500 z-50 lg:hidden shadow-lg shadow-black/40 h-screen`}
				>
					<div className="flex flex-col w-full gap-16 px-4 py-6">
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
										className="flex justify-start w-full p-2 text-2xl border-b cursor-pointer tex"
									>
										<a href={`#${tab.name}`}>{tab.name}</a>
									</div>
								);
							})}
							<div className="flex justify-center w-full text-sm">
								<Button full={true} />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
