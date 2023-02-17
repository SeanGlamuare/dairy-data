import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../../utils/email";
import prisma from "../../../lib/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method !== "POST") {
		return res.status(400).end();
	}

	const { data } = req.body;

	if (!data) {
		return res.status(400).send("Missing data");
	}

	try {
		await sendMail(data).catch((err) => {
			console.log(err);
			return res.status(500).json({ success: false });
		});
		if (process.env.DATABASE_URL) {
			const contact = await prisma.contact.create({data})
			console.log('contact : ', contact)
		}
		return res.status(200).json({ success: true });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ err });
	}
};

export default handler;
