import express from 'express';
import authRouter from './auth';
import disabilityRouter from './disability';
import userRouter from './user';
import certificateRouter from './certificate';
import skillRouter from './skill';
import jobsRouter from './jobs';

import authentication from '../../middlewares/authentication';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/disability', disabilityRouter);
v1Router.use('/user', authentication, userRouter);
v1Router.use('/certificate', authentication, certificateRouter)
v1Router.use('/skill', authentication, skillRouter)
v1Router.use('/jobs', jobsRouter)

export default v1Router