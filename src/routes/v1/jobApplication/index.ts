import express from 'express';
import {
            // getJobApplicationsForJobSeeker, 
            // getJobApplicationByIdForJobSeeker
            getJobApplicationsByCompany,
            getJobApplicationByIdForCompany
            // updateJobApplicationStatus, 
            // getJobApplicationsByStatusAndJobSeeker,
            // getJobApplicationsByStatusAndCompany,
            // createJobApplication
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { recruiterAuth } from '../../../middlewares/authorization'
import { jobSeekerAuth } from '../../../middlewares/authorization';


const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/company', authentication, recruiterAuth, getJobApplicationsByCompany);
jobApplicationRouter.get('/company/:jobApplicationId', authentication, recruiterAuth, getJobApplicationByIdForCompany);



export default jobApplicationRouter