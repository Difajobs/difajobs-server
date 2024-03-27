import express from 'express';
import { createJob, getCompanyJobList } from '../../../controllers/jobs';
import { recruiterAuth } from '../../../middlewares/authorization';

const jobsRouter = express.Router()

jobsRouter.post('/', recruiterAuth, createJob)
jobsRouter.get('/:companyId', getCompanyJobList)

export default jobsRouter