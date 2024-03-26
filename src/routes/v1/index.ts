import express from 'express';
import authRouter from './auth';
import disabilityRouter from './disability';
import userRouter from './user';
import authentication from '../../middlewares/authentication';
import jobRouter from './job';
import { recruiterAuth } from '../../middlewares/authorization';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/disability', disabilityRouter);
v1Router.use('/user', authentication, userRouter);
v1Router.use('/job', jobRouter)

export default v1Router