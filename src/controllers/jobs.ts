import { Request, Response, NextFunction } from 'express';
import { createJobService, getCompanyJobsListService, searchJobByTitleService, searchJobByLocationService, getAllJobsService, searchJobByTitleAndLocationService } from '../services/jobsService';
import { JwtPayload } from 'jsonwebtoken';
import { getToken, loggedUser } from '../utils/decodedToken';

// ------ create new job ------
const createJob = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = loggedUser(req.user!)
    try {
        const { title, description, gender, employment_type, min_salary, max_salary, ability_id, skill_names } = req.body;
        const result = await createJobService(userId, { title, description, gender, employment_type, min_salary, max_salary }, ability_id, skill_names)
        if (result.success) {
            res.status(200).json({
                success: true,
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error);
    }
}

const getCompanyJobList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const companyId = parseInt(req.params.companyId)
        const result = await getCompanyJobsListService(companyId)
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

const searchJobsByTitle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchTitle = req.query.searchTitle?.toString()
        const pageSize = parseInt(req.query.pageSize as string) || 10; 
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const result = await searchJobByTitleService(searchTitle, pageSize, pageNumber)
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

const searchJobsByLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchLocation = req.query.searchLocation?.toString()
        const pageSize = parseInt(req.query.pageSize as string) || 10; 
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const result = await searchJobByLocationService(searchLocation, pageSize, pageNumber)
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

const searchJobsByTitleAndLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {searchLocation, searchTitle} = req.query
        const pageSize = parseInt(req.query.pageSize as string) || 10; 
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        if (typeof searchLocation === 'string' && typeof searchTitle === 'string') {
            const result = await searchJobByTitleAndLocationService(searchLocation, searchTitle, pageSize, pageNumber)
            
            if (result.success) {
                res.status(200).json({
                    success: true,
                    message: result.message,
                    data: result.data
                })
            }
        }
    } catch (error) {
        next(error)
    }
}

const getAllJobs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pageSize = parseInt(req.query.pageSize as string) || 10; 
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const result = await getAllJobsService(pageSize, pageNumber)
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

export { createJob, getCompanyJobList, searchJobsByTitle, searchJobsByLocation, getAllJobs, searchJobsByTitleAndLocation }