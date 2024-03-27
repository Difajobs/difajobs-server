import express from 'express';
import { createJob, getCompanyJobList } from '../../../controllers/jobs';

const jobsRouter = express.Router()

jobsRouter.post('/', createJob)
jobsRouter.get('/:companyId', getCompanyJobList)

export default jobsRouter