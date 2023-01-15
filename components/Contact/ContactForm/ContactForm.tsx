import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { sendMail } from "../../../utils/email";
import axios from "axios";
import { useRecoilState } from "recoil";
import { contactSuccessState } from "../atom/atom";
import { contactModalState } from "../../ContactModal/atom/atom";
import Spinner from "../../Spinner/Spinner";

const StyledLabel = styled.label`
	font-weight: bold;
	font-size: 16px;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

const StyledInput = styled.input`
	font-size: 14px;
	padding: 10px 12px;
	border-radius: 4px;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.1);
	::placeholder {
		color: rgba(0, 0, 0, 0.2);
		font-weight: bold;
		font-size: 14px;
	}
`;

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [contactSuccess, setContactSuccess] =
		useRecoilState(contactSuccessState);

	const [contactModal, setContactModal] = useRecoilState(contactModalState);

	const [loading, setLoading] = useState<Boolean>(false);

	return (
		<form
			onSubmit={handleSubmit(async (data) => {
				setLoading(true);
				console.log(data);
				const { data: axiosData } = await axios({
					method: "POST",
					url: "/api/contact/sendInfo",
					data: { data },
				});
				if (axiosData.success) {
					setContactSuccess(true);
					setContactModal(false);
				}
				setLoading(false);
			})}
			className=""
		>
			<div className="flex flex-col w-full gap-4">
				<>
					{!!Object.keys(errors).length && (
						<div className="text-sm text-red-500 md:text-base">
							*Please fill out all the required fields
						</div>
					)}
				</>
				<StyledDiv className="flex flex-col">
					<StyledLabel
						className={`${errors.name && "text-red-500 "}`}
						htmlFor="name"
					>
						Name <span className="text-red-500">*</span>
					</StyledLabel>
					<StyledInput
						className=""
						{...register("name", {
							required: "This field is required",
						})}
						id="name"
						placeholder={"Enter your name"}
					/>
				</StyledDiv>
				<div className="flex flex-col w-full gap-6 lg:flex-row">
					<StyledDiv className="flex flex-col">
						<StyledLabel
							htmlFor="email"
							className={`${errors.email && "text-red-500 "}`}
						>
							Email <span className="text-red-500">*</span>
						</StyledLabel>
						<StyledInput
							type="email"
							id="email"
							{...register("email", {
								required: "This field is required",
							})}
							placeholder={"Enter your email"}
						/>
					</StyledDiv>
					<StyledDiv className="flex flex-col">
						<StyledLabel
							htmlFor="phone"
							className={`${errors.phone && "text-red-500 "}`}
						>
							Phone Number <span className="text-red-500">*</span>
						</StyledLabel>
						<StyledInput
							id="phone"
							type="number"
							{...register("phone", {
								required: "This field is required",
							})}
							placeholder={"Enter your phone number"}
						/>
					</StyledDiv>
				</div>
				<div className="flex flex-col w-full gap-6 lg:flex-row">
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="eirCode" className="">
							Eircode{" "}
						</StyledLabel>
						<StyledInput
							id="eircode"
							{...register("eirCode")}
							placeholder={"Enter your eircode"}
						/>
					</StyledDiv>
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="numOfCows" className="">
							Number of Cows
						</StyledLabel>
						<StyledInput
							id="noc"
							{...register("noc")}
							placeholder={"Enter number of cows"}
						/>
					</StyledDiv>
				</div>
				<div className="flex flex-col w-full gap-6 lg:flex-row">
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="parlourSizeMake" className="">
							Parlour Size and Make
						</StyledLabel>
						<StyledInput
							id="parlour"
							{...register("parlourSizeMake")}
							placeholder={"Enter parlour size and make"}
						/>
					</StyledDiv>
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="supplier" className="">
							Supplier
						</StyledLabel>
						<StyledInput
							id="supplier"
							{...register("supplier")}
							placeholder={"Enter supplier"}
						/>
					</StyledDiv>
				</div>
				<StyledDiv>
					<StyledLabel htmlFor="message">Message</StyledLabel>
					<textarea
						id="message"
						{...register("message")}
						className="h-40 p-2 border border-black/10 text-sm rounded outline-none max-h-24 min-h-[6rem] placeholder:text-sm placeholder:font-bold placeholder:text-black/20"
						placeholder={"Enter your message"}
					/>
				</StyledDiv>
				<div className="flex items-start gap-2 text-sm text-neutral-400">
					<input
						id="Agree"
						{...register("agree", { required: "must be checked" })}
						type="checkbox"
						className="mt-1 cursor-pointer border-neutral-200 ring-black/20"
					/>
					<label
						htmlFor="Agree"
						className={`${errors.agree && "text-red-500"}`}
					>
						I agree that the data I submit will be collected and stored
					</label>
				</div>{" "}
				<div className="w-40 h-11">
					<button
						disabled={!!loading}
						className="p-2 px-6 w-full disabled:from-neutral-500 disabled:to-neutral-500 text-white rounded-full disabled:cursor-not-allowed disabled:shadow-none cursor-pointer gradient-btn  flex justify-center  hover:shadow-lg h-full items-center hover:shadow-black/25 active:scale-[.98]"
					>
						{!loading ? (
							"Submit"
						) : (
							<div className="scale-[55%] ">
								<Spinner color={"after:bg-white"} />
							</div>
						)}
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
