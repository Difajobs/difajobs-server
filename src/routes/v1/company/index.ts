import express from 'express';
import { patchCompanyProfile } from '../../../controllers/company';
import { recruiterAuth } from '../../../middlewares/authorization';
import authentication from '../../../middlewares/authentication';

const companyRouter = express.Router()

companyRouter.patch('/profile', authentication, recruiterAuth, patchCompanyProfile);

export default companyRouter