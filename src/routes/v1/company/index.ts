import express from "express";
import { getCompanyProfile } from "../../../controllers/company";
import { getCompanyJobList } from "../../../controllers/jobs";

const companyRouter = express.Router()

companyRouter.get('/:companyId', getCompanyProfile)
companyRouter.get('/:companyId/jobs', getCompanyJobList)

export default companyRouter