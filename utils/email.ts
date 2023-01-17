import { EmailData } from "@sendgrid/helpers/classes/email-address";
import { MailContent } from "@sendgrid/helpers/classes/mail";
import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail/src/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

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
};
