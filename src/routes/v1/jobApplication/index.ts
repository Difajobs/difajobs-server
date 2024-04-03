import express from 'express';
import {
            getJobApplicationsByCompany,
            getJobApplicationByIdForCompany
        } from '../../../controllers/jobApplication';
import authentication from '../../../middlewares/authentication';
import { recruiterAuth } from '../../../middlewares/authorization'
import { jobSeekerAuth } from '../../../middlewares/authorization';


const jobApplicationRouter = express.Router()

jobApplicationRouter.get('/company', authentication, recruiterAuth, getJobApplicationsByCompany);
jobApplicationRouter.get('/company/:jobApplicationId', authentication, recruiterAuth, getJobApplicationByIdForCompany);



export default jobApplicationRouter