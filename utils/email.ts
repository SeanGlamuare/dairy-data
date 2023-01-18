/* import { EmailData } from "@sendgrid/helpers/classes/email-address";
import { MailContent } from "@sendgrid/helpers/classes/mail";
import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail/src/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);


export const sendMail = async ({
	name,
	email,
	phone,
	message,
	supplier,
	eirCode,
	numOfCows,
	parlourSizeMake,
}: mailProps) => {
	//@ts-ignore
	const msg = {
		from: process.env.SENDER,
		to: process.env.RECEIVER,
		templateId: process.env.SENDGRID_TEMPLATE_ID,
		dynamic_template_data: {
			Customer_Name: name,
			Customer_Email: email,
			Customer_Phone: phone,
			EirCode: eirCode,
			NOC: numOfCows,
			Supplier: supplier,
			parlourSizeMake,
			Message: message,
		},
	};
	
	try {
		//@ts-ignore
		const email = await sgMail.send(msg);
		console.log(email);
	} catch (err) {
		console.log(err);
	}
}; */

type mailProps = {
	name: string;
	email: string;
	phone: string;
	message?: string;
	eirCode?: string;
	numOfCows?: string;
	parlourSizeMake?: string;
	supplier?: string;
};

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
	apiKey: process.env.MAILSENDER_API as string,
});

export const sendMail: ({}: mailProps) => void = async ({
	name,
	email,
	phone,
	message,
	supplier,
	eirCode,
	numOfCows,
	parlourSizeMake,
}) => {
	const sentFrom = new Sender("info@dairydata.ie", "Dairy Data");

	const recipients = [new Recipient("info@dairydata.ie", "Dairy Data")];

	const personalization = [
		{
			email: "info@dairydata.ie",
			data: {
				NOC: numOfCows || "---",
				EirCode: eirCode || "---",
				Message: message || "---",
				Supplier: supplier || "---",
				Customer_Name: name || "---",
				Customer_Email: email || "---",
				Customer_Phone: phone || "---",
				ParlourSizeMake: parlourSizeMake || "---",
			},
		},
	];

	const emailParams = new EmailParams()
		.setFrom(sentFrom)
		.setTo(recipients)
		.setSubject("New Contact")
		.setTemplateId("jpzkmgqkve1g059v")
		.setPersonalization(personalization);

	await mailerSend.email.send(emailParams);
};
