import express from 'express';
import authRouter from './auth';
import disabilityRouter from './disability';
import userRouter from './user';
import authentication from '../../middlewares/authentication';
import certificateRouter from './certificate';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/disability', disabilityRouter);
v1Router.use('/user', authentication, userRouter);
v1Router.use('/certificate', authentication, certificateRouter)

export default v1Router