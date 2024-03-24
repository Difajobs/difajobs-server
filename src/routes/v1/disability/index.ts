import express from 'express';
import { disabilityList } from '../../../controllers/disability';

const disabilityRouter = express.Router()

disabilityRouter.post('/', disabilityList)

export default disabilityRouter;