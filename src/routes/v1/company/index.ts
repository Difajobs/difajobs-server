import express from "express";
import { getAllCompany, getCompanyProfile } from "../../../controllers/company";
import { getCompanyJobList } from "../../../controllers/jobs";

const companyRouter = express.Router()

companyRouter.get('/', getAllCompany)
companyRouter.get('/:companyId', getCompanyProfile)
companyRouter.get('/:companyId/jobs', getCompanyJobList)

export default companyRouter