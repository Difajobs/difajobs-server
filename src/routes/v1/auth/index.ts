import express from 'express';
import { userRegister } from '../../../controllers/user';

const authRouter = express.Router()

authRouter.post('/register', userRegister)



export default authRouter;