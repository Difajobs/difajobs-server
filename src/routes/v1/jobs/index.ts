import express from 'express';
import { createJob, searchJobsByTitle, searchJobsByLocation, getAllJobs, searchJobsByTitleAndLocation, getOneJob, editJobListing } from '../../../controllers/jobs';
import { recruiterAuth } from '../../../middlewares/authorization';

const jobsRouter = express.Router()

jobsRouter.post('/', recruiterAuth, createJob)
jobsRouter.get('/', async (req, res, next) => {
    const { title, location } = req.query
    if (location && title) {
        await searchJobsByTitleAndLocation(req,res,next)
    } else if (location) {
        await searchJobsByLocation(req,res,next)
    } else if (title) {
        await searchJobsByTitle(req,res,next)
    } else {
        await getAllJobs(req,res,next)
    }
})
jobsRouter.get('/:jobId', getOneJob)
jobsRouter.patch('/:jobId', editJobListing)

export default jobsRouter