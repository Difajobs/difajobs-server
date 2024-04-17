import { Request, Response } from "express";
import {
  sendVerificationLink,
  updateUserStatus,
} from "../services/verificationService";
import { v4 as uuidv4 } from "uuid";
import redisClient from "../config/db/redisClient";
import { client_url } from "../utils/url";

const sendTokenLink = async (req: Request, res: Response) => {
  const { email } = req.body;

  const token: string = uuidv4();

  //localhost
  //const verificationLink: string = `http://localhost:3000/v1/auth/token-verify?email=${email}&token=${token}`;

  const verificationLink: string = `https://difajobs-server.vercel.app/v1/auth/token-verify?email=${email}&token=${token}`;

  try {
    await sendVerificationLink(email, verificationLink);

    redisClient.set(email, token);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

const verifyTokenLink = async (req: Request, res: Response) => {
  const { token } = req.query;

  const tokenInput: string = typeof token === "string" ? token : "";

  const email: string | undefined = req.query.email as string | undefined;

  if (email === undefined) {
    console.error("Email is undefined");
    res.status(400).json({ message: "Email is required" });
    return;
  }

  const realToken = await redisClient.get(email);

  if (realToken === null) {
    console.error("Token not found for email:", email);
    res.status(404).json({ message: "Token not found" });
    return;
  }

  if (realToken !== token) {
    console.error("Token mismatch for email:", email);
    res.status(400).json({ message: "Token does not match" });
    return;
  }

  redisClient.del(email);

  try {
    await updateUserStatus(email);

    res.status(200).json({ message: "Verify Status Changed successfully" });
    res.redirect(`${client_url}/account-verified`);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to Changed Status" });
  }
};

export { sendTokenLink, verifyTokenLink };
