import express from 'express';
import { jobSeekerRegister, recruiterRegister, userLogin } from '../../../controllers/auth';
import { sendOtp } from '../../../controllers/otp';



const authRouter = express.Router()

authRouter.post('/jobseeker-register', jobSeekerRegister)
authRouter.post('/recruiter-register', recruiterRegister)
authRouter.post('/login', userLogin)
authRouter.post('/sendotp', sendOtp)

export default authRouter;