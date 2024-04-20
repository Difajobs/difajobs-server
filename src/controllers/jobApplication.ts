import { Request, Response, NextFunction } from 'express';
import { getAllJobApplicationByCompanyAndStatusService, getAllJobApplicationByCompanyService, getJobApplicationsByJobIdService, getOneJobApplicationByCompanyService, updateOneJobApplicationService } from '../services/jobApplicationService';
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

const getOneJobApplicationByCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const  jobApplicationId = parseInt(req.params.jobApplicationId)
        const result = await getOneJobApplicationByCompanyService(jobApplicationId, userId)
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

const getAllJobApplicationByCompanyAndStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const status = req.params.status
        const result = await getAllJobApplicationByCompanyAndStatusService(userId, status)
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

const updateOneJobApplicationStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const  jobApplicationId = parseInt(req.params.jobApplicationId)
        const { status } = req.body
        const result = await updateOneJobApplicationService(jobApplicationId, userId, status)
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

export { getJobApplicationsByJobId, getAllJobApplicationByCompany, getOneJobApplicationByCompany, getAllJobApplicationByCompanyAndStatus, updateOneJobApplicationStatus }