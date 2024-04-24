import express from 'express';
import authRouter from './auth';
import disabilityRouter from './disability';
import userRouter from './user';
import certificateRouter from './certificate';
import skillRouter from './skill';
import jobsRouter from './jobs';
import { jobSeekerAuth } from '../../middlewares/authorization';
import companyRouter from './company';
import jobApplicationRouter from './jobApplication';
import abilityRouter from './ability';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/disability', disabilityRouter);
v1Router.use('/user', jobSeekerAuth, userRouter);
v1Router.use('/certificate', jobSeekerAuth, certificateRouter)
v1Router.use('/skill', jobSeekerAuth, skillRouter)
v1Router.use('/jobs', jobsRouter)
v1Router.use('/company', companyRouter)
v1Router.use('/job-application', jobApplicationRouter)
v1Router.use('/ability', abilityRouter)

export default v1Router