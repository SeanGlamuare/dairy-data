import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../../utils/email";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method !== "POST") {
		return res.status(400).end();
	}

	const { data } = req.body;

	if (!data) {
		return res.status(400).send("Missing data");
	}

	await sendMail(data);

	return res.status(200).json({ success: true });
};

export default handler;
