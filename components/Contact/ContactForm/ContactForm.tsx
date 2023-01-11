import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledLabel = styled.label`
	font-weight: bold;
	font-size: 14px;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

const StyledInput = styled.input`
	font-size: 14px;
	padding: 0.5rem;
	border-radius: 4px;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.1);
	::placeholder {
		color: rgba(0, 0, 0, 0.2);
		font-weight: bold;
		font-size: 12px;
	}
`;

const ContactForm = () => {
	const { register, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
			className=""
		>
			<div className="flex flex-col w-full gap-4">
				<StyledDiv className="flex flex-col">
					<StyledLabel className="" htmlFor="name">
						Name *
					</StyledLabel>
					<StyledInput
						{...register("name", {
							required: "This field is required",
						})}
						id="name"
						placeholder={"Enter your name"}
					/>
				</StyledDiv>
				<div className="flex flex-col w-full gap-6 lg:flex-row">
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="email" className="">
							Email *
						</StyledLabel>
						<StyledInput
							id="email"
							{...register("email", {
								required: "This field is required",
							})}
							placeholder={"Enter your email"}
						/>
					</StyledDiv>
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="phone" className="">
							Phone Number *
						</StyledLabel>
						<StyledInput
							id="phone"
							{...register("phone", {
								required: "This field is required",
							})}
							placeholder={"Enter your phone number"}
						/>
					</StyledDiv>
				</div>
				<div className="flex flex-col w-full gap-6 lg:flex-row">
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="eircode" className="">
							Eircode{" "}
						</StyledLabel>
						<StyledInput
							id="eircode"
							{...register("eircode")}
							placeholder={"Enter your eircode"}
						/>
					</StyledDiv>
					<StyledDiv className="flex flex-col">
						<StyledLabel htmlFor="noc" className="">
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
						<StyledLabel htmlFor="parlour" className="">
							Parlour Size and Make
						</StyledLabel>
						<StyledInput
							id="parlour"
							{...register("parlour")}
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
						rows={4}
						className="h-40 p-2 border border-black/10 text-sm rounded outline-none max-h-24 min-h-[6rem] placeholder:text-xs placeholder:font-bold placeholder:text-black/20"
						minLength={4}
						maxLength={4}
						placeholder={"Enter your message"}
					/>
				</StyledDiv>
				<div className="flex gap-2 text-sm text-neutral-400">
					<input
						id="Agree"
						{...register("agree")}
						type="checkbox"
						className="cursor-pointer border-neutral-200 ring-inset ring-black/20"
					/>
					<label htmlFor="Agree">
						I agree that the data I submit will be collected and stored
					</label>
				</div>{" "}
				<div className="w-40">
					<button className="p-2 px-6 w-36 text-white rounded-full cursor-pointer bg-gradient-to-b from-neutral-600 flex justify-center to-neutral-900 hover:shadow-lg hover:shadow-black/25 active:scale-[.98]">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
