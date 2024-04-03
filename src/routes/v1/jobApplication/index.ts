import express from 'express';
import {
            getJobApplicationsForJobSeeker, 
            getJobApplicationByIdForJobSeeker,
            getJobApplicationsByJobSeekerAndStatus
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { jobSeekerAuth } from '../../../middlewares/authorization';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/status', authentication, jobSeekerAuth, getJobApplicationsByJobSeekerAndStatus)
jobApplicationRouter.get('/',authentication, jobSeekerAuth, getJobApplicationsForJobSeeker)
jobApplicationRouter.get('/:jobApplicationId', authentication, jobSeekerAuth, getJobApplicationByIdForJobSeeker)

export default jobApplicationRouter;