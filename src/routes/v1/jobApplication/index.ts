import express from 'express';
import {
            // getJobApplicationsForJobSeeker, 
            // getJobApplicationByIdForJobSeeker
            // getJobApplicationsByCompany,
            // getJobApplicationByIdForCompany
            // updateJobApplicationStatus, 
            // getJobApplicationsByStatusAndJobSeeker,
            getJobApplicationsByCompanyAndStatus,
            // createJobApplication
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { recruiterAuth } from '../../../middlewares/authorization'
import { jobSeekerAuth } from '../../../middlewares/authorization';


const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/company/status', authentication, recruiterAuth, getJobApplicationsByCompanyAndStatus);

export default jobApplicationRouter

