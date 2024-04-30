import express from 'express';
import { createJob, searchJobsByTitle, searchJobsByLocation, getAllJobs, searchJobsByTitleAndLocation, getOneJob, editJobListing, deleteJobListing } from '../../../controllers/jobs';
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
jobsRouter.patch('/:jobId', recruiterAuth, editJobListing)
jobsRouter.delete('/:jobId', recruiterAuth, deleteJobListing)

export default jobsRouter