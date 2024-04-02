import { Request, Response, NextFunction } from 'express';
import { createJobService, getCompanyJobsListService, searchJobByTitleService, searchJobByLocationService, getAllJobsService, searchJobByTitleAndLocationService, updateJobService } from '../services/jobsService';
import { JwtPayload } from 'jsonwebtoken';
import { getToken, loggedUser } from '../utils/decodedToken';

// ------ create new job ------
const createJob = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = loggedUser(req.user!)
    try {
        const { title, description, gender, employment_type, min_salary, max_salary, ability_id, skill_names, question_1, question_2, question_3 } = req.body;
        const result = await createJobService(userId, { title, description, gender, employment_type, min_salary, max_salary }, ability_id, skill_names, question_1, question_2, question_3)
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
        const title = req.query.title?.toString()
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const result = await searchJobByTitleService(title, pageSize, pageNumber)
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
        const location = req.query.location?.toString()
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const result = await searchJobByLocationService(location, pageSize, pageNumber)
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
        const { location, title } = req.query
        const pageSize = parseInt(req.query.pageSize as string) || 10;
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        if (typeof location === 'string' && typeof title === 'string') {
            const result = await searchJobByTitleAndLocationService(location, title, pageSize, pageNumber)

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

const patchJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobId = parseInt(req.params.jobId);
        if (isNaN(jobId)) {
            return res.status(400).json({ success: false, message: "Invalid job ID." });
        }
        const { userId } = loggedUser(req.user!);
        const updateData = req.body; // Assuming all relevant job fields can be updated
        const result = await updateJobService(userId, jobId, updateData);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

export { createJob, getCompanyJobList, searchJobsByTitle, searchJobsByLocation, getAllJobs, searchJobsByTitleAndLocation, patchJob }