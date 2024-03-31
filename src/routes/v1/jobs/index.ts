import express from 'express';
import { createJob, getCompanyJobList, searchJobsByTitle, searchJobsByLocation, getAllJobs, searchJobsByTitleAndLocation } from '../../../controllers/jobs';
import { recruiterAuth } from '../../../middlewares/authorization';

const jobsRouter = express.Router()

jobsRouter.post('/', recruiterAuth, createJob)
jobsRouter.get('/', async (req, res, next) => {
    const { searchTitle, searchLocation } = req.query
    if (searchLocation && searchTitle) {
        await searchJobsByTitleAndLocation(req,res,next)
    } else if (searchLocation) {
        await searchJobsByLocation(req,res,next)
    } else if (searchTitle) {
        await searchJobsByTitle(req,res,next)
    } else {
        await getAllJobs(req,res,next)
    }
})
jobsRouter.get('/:companyId', getCompanyJobList)

export default jobsRouter