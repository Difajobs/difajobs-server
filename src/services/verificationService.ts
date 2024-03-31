import nodemailer from 'nodemailer';
import verifyEmailTemplate from '../templates/verifyEmailTemplate';
import * as dotenv from 'dotenv';
import { updateVerifyStatus } from '../dao/verificationDao';
import ErrorHandler from '../utils/errorHandler';

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

const sendVerificationLink = async (to: string, link: string) => {
    try {

        await transporter.sendMail({
            from: process.env.SMTP_SENDER,
            to: to,
            subject: 'Verifikasi email',
            html: verifyEmailTemplate(link).html
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const updateUserStatus = async (email: string) => {
    try {
        const updateStatus = await updateVerifyStatus(email)

    } catch (error) {
    console.error('Error Update Status:', error);
}
};

export { sendVerificationLink, updateUserStatus };