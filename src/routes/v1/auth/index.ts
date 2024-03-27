import express from 'express';
import { jobSeekerRegister, recruiterRegister, userLogin } from '../../../controllers/auth';

const authRouter = express.Router()

authRouter.post('/jobseeker-register', jobSeekerRegister)
authRouter.post('/recruiter-register', recruiterRegister)
authRouter.post('/login', userLogin)

export default authRouter;