import express from 'express';
import { getCompanyJobList } from '../../../controllers/jobs';

const jobsRouter = express.Router()

jobsRouter.get('/:companyId', getCompanyJobList)

export default jobsRouter