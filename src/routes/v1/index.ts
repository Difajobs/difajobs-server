import express from 'express';
import authRouter from './auth';
import userRouter from './user';
import authentication from '../../middlewares/authentication';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/user', authentication, userRouter);

export default v1Router