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
		const user = await prisma.contact.create({
			data,
		});
		await sendMail(data);

		return res.status(200).json({ success: true });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ err, success: false });
	}
};

export default handler;
