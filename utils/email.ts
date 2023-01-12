import { EmailData } from "@sendgrid/helpers/classes/email-address";
import { MailContent } from "@sendgrid/helpers/classes/mail";
import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail/src/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendMail = async ({
	name,
	email,
	phone,
	message,
}: Record<string, string>) => {
	//@ts-ignore
	const msg = {
		from: process.env.SENDER,
		to: "eyobmalik@gmail.com",
		templateId: process.env.SENDGRID_TEMPLATE_ID,
		dynamic_template_data: {
			Customer_Name: name,
			Customer_Email: email,
			Customer_Phone: phone,
			Message: message,
		},
	};

	try {
		//@ts-ignore
		await sgMail.send(msg);
		console.log("done");
	} catch (err) {
		console.log(err);
	}
};
