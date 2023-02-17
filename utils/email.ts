import { EmailData } from "@sendgrid/helpers/classes/email-address";
import { MailContent } from "@sendgrid/helpers/classes/mail";
import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail/src/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendMail = async ({
	name,
	email,
	phone,
	eirCode,
	noc,
	parlourSizeMake,
	supplier,
	message,
}: Record<string, string>) => {
	//@ts-ignore
	const msg = {
		from: process.env.SENDER,
		to: process.env.CONTACT_EMAIL,
		templateId: process.env.SENDGRID_TEMPLATE_ID,
		dynamic_template_data: {
			Customer_Name: name,
			Customer_Email: email,
			Customer_Phone: phone,
			Customer_Eircode: eirCode,
			Customer_Number_of_Cows: noc,
			Customer_Parlour_Size_and_Make: parlourSizeMake,
			Customer_Supplier: supplier,
			Customer_Message: message,
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
