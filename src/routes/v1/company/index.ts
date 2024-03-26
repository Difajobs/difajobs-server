import express from 'express';
import { getAllCompanies } from '../../../controllers/company';

const companyRouter = express.Router()

companyRouter.get('/', getAllCompanies)

export default companyRouter;