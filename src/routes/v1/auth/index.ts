import express from 'express';
import { jobSeekerRegister, recruiterRegister, userLogin, userLogout } from '../../../controllers/user';

const authRouter = express.Router()

authRouter.post('/jobseeker-register', jobSeekerRegister)
authRouter.post('/recruiter-register', recruiterRegister)
authRouter.post('/login', userLogin)
authRouter.post('/logout', userLogout)

export default authRouter;