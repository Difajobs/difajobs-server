import express from 'express';
import authRouter from './auth';
import disabilityRouter from './disability';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/disability', disabilityRouter);


export default v1Router