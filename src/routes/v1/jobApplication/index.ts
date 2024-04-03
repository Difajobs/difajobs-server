import express from 'express';
import {
            createJobApplication
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { jobSeekerAuth } from '../../../middlewares/authorization';

const jobApplicationRouter = express.Router()

jobApplicationRouter.post('/', authentication, jobSeekerAuth, createJobApplication)

export default jobApplicationRouter;