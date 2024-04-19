import express from 'express';
import { recruiterAuth } from '../../../middlewares/authorization';
import { getAllJobApplicationByCompany, getAllJobApplicationByCompanyAndStatus, getJobApplicationsByJobId, getOneJobApplicationByCompany } from '../../../controllers/jobApplication';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/all', recruiterAuth, getAllJobApplicationByCompany)
jobApplicationRouter.get('/job/:jobId', recruiterAuth, getJobApplicationsByJobId)
jobApplicationRouter.get('/application/:jobApplicationId', recruiterAuth, getOneJobApplicationByCompany)
jobApplicationRouter.get('/status/:status', recruiterAuth, getAllJobApplicationByCompanyAndStatus)


export default jobApplicationRouter