import express from 'express';
import { createJob } from '../../../controllers/job';

const jobRouter = express.Router()

jobRouter.post('/', createJob)

export default jobRouter