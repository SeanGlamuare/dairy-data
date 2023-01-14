import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	BsFacebook,
	BsInstagram,
	BsMailbox,
	BsTelephone,
	BsTwitter,
} from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import styled from "styled-components";

const contactData = {
	phone: "+353 87 606 4344",
	mail: "info@dairydata.ie",
	instagram: "dairydata",
	facebook: "Dairy Data",
	twitter: "dairydata",
};

const A = styled.a`
	color: rgba(20, 160, 255, 0.8);
	cursor: pointer;
	:hover {
		color: rgb(20, 100, 255);
	}
	transition: all ease-in-out 0.1s;
`;

const Footer = () => {
	const { phone, mail, instagram, facebook, twitter } = contactData;

	return (
		<div className="flex justify-center w-full px-2 py-2 overflow-hidden lg:px-20 gradient-ftr">
			<div className="flex flex-col justify-center w-full max-w-6xl gap-6 py-2 h-76 lg:h-28 text-neutral-400 2xl:max-w-7xl ">
				<div className="flex flex-col items-center justify-center py-4 lg:justify-between gap-y-6 2xl:gap-x-20 gap-x-24 lg:flex-row">
					<div className="flex flex-col w-full gap-2 lg:w-max min-w-fit">
						<div className="flex items-center justify-start w-full gap-2 text-2xl lg:w-max text-neutral-200">
							<Image src="/logo.png" width={50} height={50} alt="logo" />
							<div className="text-xl uppercase whitespace-nowrap xl:text-2xl">
								Dairy <span className="text-blue-500">Data</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col flex-wrap items-start justify-between w-full px-2 text-sm lg:flex-nowrap xl:gap-x-6 gap-y-8 2xl:flex-row">
						<div className="flex flex-col items-start justify-start w-full gap-4 xl:flex-row 2xl:justify-start gap-x-6">
							<div className="lg:hidden xl:block">Contact</div>
							<div className="flex gap-6 jsutify-between">
								<div className="flex items-center gap-2">
									<BsTelephone />
									<Link href={`tel:${phone}`}>
										<A>{phone}</A>
									</Link>
								</div>

								<div className="flex items-center gap-2">
									<IoMailOutline />
									<Link href={`mailto:${mail}`} passHref>
										<A>{mail}</A>
									</Link>
								</div>
							</div>
						</div>
						<div className="flex flex-col flex-wrap items-start justify-center w-full gap-2 lg:flex-row gap-x-6 xl:justify-center gap-y-6 xl:flex-nowrap min-w-fit 2xl:justify-start ">
							<div className="w-32 lg:hidden xl:block">Social Media</div>
							<div className="flex flex-wrap w-full gap-y-4 xl:flex-nowrap gap-x-8 md:gap-x-10">
								<div className="flex items-center gap-2">
									<BsInstagram />
									<Link href={`https://instagram.com/${instagram}`} passHref>
										<A>@{instagram}</A>
									</Link>
								</div>
								<div className="flex items-center gap-2">
									<FaFacebookF />
									<Link href={`https://facebook.com/${facebook}`}>
										<A>{facebook}</A>
									</Link>
								</div>
								<div className="flex items-center gap-2">
									<BsTwitter />
									<Link href={`https://twitter.com/${twitter}`} passHref>
										<A>@{twitter}</A>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
