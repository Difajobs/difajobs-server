import express from 'express';
import { recruiterAuth } from '../../../middlewares/authorization';
import { getAllJobApplicationByCompany, getAllJobApplicationByCompanyAndStatus, getJobApplicationsByJobId, getOneJobApplicationByCompany, updateOneJobApplicationStatus } from '../../../controllers/jobApplication';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/all', recruiterAuth, getAllJobApplicationByCompany)
jobApplicationRouter.get('/job/:jobId', recruiterAuth, getJobApplicationsByJobId)
jobApplicationRouter.get('/application/:jobApplicationId', recruiterAuth, getOneJobApplicationByCompany)
jobApplicationRouter.get('/status/:status', recruiterAuth, getAllJobApplicationByCompanyAndStatus)
jobApplicationRouter.put('/application/:jobApplicationId', recruiterAuth, updateOneJobApplicationStatus)

export default jobApplicationRouter