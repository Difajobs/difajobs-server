import express from 'express';
import {
            getJobApplicationsForJobSeeker, 
            getJobApplicationByIdForJobSeeker,
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { jobSeekerAuth } from '../../../middlewares/authorization';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/',authentication, jobSeekerAuth, getJobApplicationsForJobSeeker)
jobApplicationRouter.get('/:jobApplicationId', authentication, jobSeekerAuth, getJobApplicationByIdForJobSeeker)

export default jobApplicationRouter;