import express from "express";
import { getCompanyProfile } from "../../../controllers/company";

const companyRouter = express.Router()

companyRouter.get('/:companyId', getCompanyProfile)

export default companyRouter