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

	/* await sendMail(data).catch((err) => {
		console.log(err);
		return res.status(500).json({ success: false });
	}); */

	try {
		const user = await prisma.contact.create({
			data,
		});

		console.log(user);

		return res.status(200).json({ success: true });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ err });
	}
};

export default handler;
