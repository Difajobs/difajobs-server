import express from 'express';
import { recruiterAuth } from '../../../middlewares/authorization';
import { getAllJobApplicationByCompany, getJobApplicationsByJobId } from '../../../controllers/jobApplication';

const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/all', recruiterAuth, getAllJobApplicationByCompany)
jobApplicationRouter.get('/:jobId', recruiterAuth, getJobApplicationsByJobId)

export default jobApplicationRouter