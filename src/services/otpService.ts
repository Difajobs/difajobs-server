import nodemailer from 'nodemailer';
import verifyEmailTemplate from '../templates/verifyEmailTemplate';
import * as dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

const sendVerificationEmail = async (to: string, otpCode: string) => {
    try {

        await transporter.sendMail({
            from: process.env.SMTP_SENDER,
            to: to,
            subject: 'Kode Verifikasi OTP',
            html: verifyEmailTemplate(otpCode).html
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export { sendVerificationEmail };