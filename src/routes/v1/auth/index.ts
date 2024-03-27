import express from 'express';
import { jobSeekerRegister, recruiterRegister } from '../../../controllers/auth';

const authRouter = express.Router()

authRouter.post('/jobseeker-register', jobSeekerRegister)
authRouter.post('/recruiter-register', recruiterRegister)

export default authRouter;