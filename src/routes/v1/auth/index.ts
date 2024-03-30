import express from 'express';
import { jobSeekerRegister, recruiterRegister, userLogin } from '../../../controllers/auth';
import { sendTokenLink, verifyTokenLink } from '../../../controllers/verification';



const authRouter = express.Router()

authRouter.post('/jobseeker-register', jobSeekerRegister)
authRouter.post('/recruiter-register', recruiterRegister)
authRouter.post('/login', userLogin)
authRouter.post('/token-send', sendTokenLink)
authRouter.get('/token-verify', verifyTokenLink)

export default authRouter;