import express from 'express';
import { createJob, getCompanyJobList, searchJobs } from '../../../controllers/jobs';
import { recruiterAuth } from '../../../middlewares/authorization';

const jobsRouter = express.Router()

jobsRouter.post('/', recruiterAuth, createJob)
jobsRouter.get('/:companyId', getCompanyJobList)
jobsRouter.get('/search', searchJobs)

export default jobsRouter