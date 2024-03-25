import express from 'express';
import { jobSeekerRegister, recruiterRegister } from '../../../controllers/user';

const authRouter = express.Router()

authRouter.post('/jobseeker-register', jobSeekerRegister)
authRouter.post('/recruiter-register', recruiterRegister)



export default authRouter;