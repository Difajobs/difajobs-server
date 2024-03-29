import { Request, Response } from 'express';
import { sendVerificationEmail } from '../services/otpService';


const sendOtp = async (req: Request, res: Response) => {
    const { email } = req.body;

    const generateOtp = (): string => {
        const otp = Math.floor(Math.random() * 900000) + 100000;
        return otp.toString();
    }
    
    const otp: string = generateOtp();

    try {
        await sendVerificationEmail(email, otp);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }

    
}

export { sendOtp };