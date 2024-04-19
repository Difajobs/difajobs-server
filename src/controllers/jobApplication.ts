import { Request, Response, NextFunction } from 'express';
import { getAllJobApplicationByCompanyService, getJobApplicationsByJobIdService } from '../services/jobApplication';
import { loggedUser } from '../utils/decodedToken';

const getJobApplicationsByJobId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const  jobId = parseInt(req.params.jobId)
        const result = await getJobApplicationsByJobIdService(userId, jobId)
        if (result.success) {
          res.status(200).json({
            success: true,
            message: result.message,
            data: result.data
          })
        }
    } catch (error) {
        next(error)
    }
}

const getAllJobApplicationByCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const result = await getAllJobApplicationByCompanyService(userId)
        if (result.success) {
          res.status(200).json({
            success: true,
            message: result.message,
            data: result.data
          })
        }
    } catch (error) {
        next(error)
    }
}

export { getJobApplicationsByJobId, getAllJobApplicationByCompany }