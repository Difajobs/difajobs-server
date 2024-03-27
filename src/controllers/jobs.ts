import { Request, Response, NextFunction } from 'express';
import { createJobService, getCompanyJobsListService } from '../services/jobsService';
import { JwtPayload } from 'jsonwebtoken';

// ------ create new job ------
const createJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const user_id = (req.user as JwtPayload).id
        const { title, description, gender, employment_type, min_salary, max_salary, ability_id } = req.body;
        const result = await createJobService({ title, description, gender, employment_type, min_salary, max_salary }, ability_id)
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

export { createJob, getCompanyJobList }