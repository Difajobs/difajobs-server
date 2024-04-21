import express from 'express';
import { jobSeekerAuth, recruiterAuth } from '../../../middlewares/authorization';
import { createJobApplication, getAllJobApplicationByCompany, getAllJobApplicationByCompanyAndStatus, getJobApplicationsByJobId, getOneJobApplicationByCompany, updateOneJobApplicationStatus } from '../../../controllers/jobApplication';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/all', recruiterAuth, getAllJobApplicationByCompany)
jobApplicationRouter.get('/job/:jobId', recruiterAuth, getJobApplicationsByJobId)
jobApplicationRouter.get('/application/:jobApplicationId', recruiterAuth, getOneJobApplicationByCompany)
jobApplicationRouter.get('/status/:status', recruiterAuth, getAllJobApplicationByCompanyAndStatus)
jobApplicationRouter.put('/application/:jobApplicationId', recruiterAuth, updateOneJobApplicationStatus)
jobApplicationRouter.post('/:jobId', jobSeekerAuth, createJobApplication)

export default jobApplicationRouter