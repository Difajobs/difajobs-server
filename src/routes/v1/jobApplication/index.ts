import express from 'express';
import {
            updateJobApplicationStatus, 
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { recruiterAuth } from '../../../middlewares/authorization'


const jobApplicationRouter = express.Router()

jobApplicationRouter.put('/company/status/:jobApplicationId', authentication,recruiterAuth, updateJobApplicationStatus);



export default jobApplicationRouter