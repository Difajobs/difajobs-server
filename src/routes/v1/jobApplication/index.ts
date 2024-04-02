import express from 'express';
import {
            getJobApplicationsForJobSeeker, 
            // getJobApplicationsForCompany, 
            // updateJobApplicationStatus, 
            // getJobApplicationsByStatusAndJobSeeker,
            // getJobApplicationsByStatusAndCompany,
            // createJobApplication
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { jobSeekerAuth } from '../../../middlewares/authorization';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/my-job-applications',authentication, getJobApplicationsForJobSeeker)
// jobApplicationRouter.get('/company/:companyId', getJobApplicationsForCompany)
// jobApplicationRouter.put('/status/:applicationId', updateJobApplicationStatus)
// jobApplicationRouter.get('/job-seeker/:jobSeekerId/status', getJobApplicationsByStatusAndJobSeeker)
// jobApplicationRouter.get('/company/:companyId/status', getJobApplicationsByStatusAndCompany)
// jobApplicationRouter.post('/', authentication, jobSeekerAuth, createJobApplication)

export default jobApplicationRouter;