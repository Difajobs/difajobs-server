import express from 'express';
import {
            getJobApplicationsForJobSeeker, 
            getJobApplicationByIdForJobSeeker
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { jobSeekerAuth } from '../../../middlewares/authorization';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/my-job-applications',authentication, getJobApplicationsForJobSeeker)
jobApplicationRouter.get('/my-job-applications/:jobApplicationId', authentication, getJobApplicationByIdForJobSeeker)

export default jobApplicationRouter;