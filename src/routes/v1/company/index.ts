import express from "express";
import { getAllCompany, getCompanyProfile, updateCompanyData } from "../../../controllers/company";
import { getCompanyJobList } from "../../../controllers/jobs";
import { recruiterAuth } from "../../../middlewares/authorization";

const companyRouter = express.Router()

companyRouter.get('/', getAllCompany)
companyRouter.get('/:companyId', getCompanyProfile)
companyRouter.get('/:companyId/jobs', getCompanyJobList)
companyRouter.patch('/', recruiterAuth, updateCompanyData)

export default companyRouter