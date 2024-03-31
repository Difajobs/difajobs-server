import { Request, Response, NextFunction } from 'express';
import { createJobService, getCompanyJobsListService, searchJobService } from '../services/jobsService';
import { JwtPayload } from 'jsonwebtoken';
import { getToken, loggedUser } from '../utils/decodedToken';

// ------ create new job ------
const createJob = async (req: Request, res: Response, next: NextFunction) => {
    const token = getToken(req)
    const { userId } = loggedUser(token)
    try {
        const { title, description, gender, employment_type, min_salary, max_salary, ability_id } = req.body;
        const result = await createJobService(userId, { title, description, gender, employment_type, min_salary, max_salary }, ability_id)
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

const searchJobs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchTitle = req.query.searchTitle?.toString() || ''
        const searchLocation = req.query.searchLocation?.toString() || ''
        const pageSize = parseInt(req.query.pageSize as string) || 10; 
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const result = await searchJobService(searchTitle, searchLocation, pageSize, pageNumber)
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
export { createJob, getCompanyJobList, searchJobs }