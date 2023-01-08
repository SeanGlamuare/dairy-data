import Image from "next/image";
import React from "react";

const menu = [
	{ name: "Home" },
	{ name: "About Us" },
	{ name: "Our Services" },
	{ name: "Testimonials" },
	{ name: "Our Projects" },
];

const Navbar = () => {
	return (
		<div className="flex justify-center px-8 py-8 bg-white h-36">
			<div className="flex justify-between w-full max-w-5xl">
				<div className="flex items-center gap-2 title">
					<div>
						<Image alt={"logo"} src="/dairy_logo.png" width={75} height={75} />
					</div>
					<div className="font-serif text-3xl uppercase">
						Dairy <span className="text-blue-500">Data</span>
					</div>
				</div>
				<div className="flex items-center gap-5 text-sm">
					{menu.map((tab: { name: string }) => {
						return (
							<div className="font-semibold cursor-pointer hover:underline hover:underline-offset-2">
								{tab.name}
							</div>
						);
					})}
					<div className="p-2 px-8 text-white rounded-full cursor-pointer bg-gradient-to-b from-neutral-600 to-neutral-900 hover:shadow-lg hover:shadow-black/25 active:scale-[.97]">
						Contact Us
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
