import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    getJobApplicationsByJobSeekerService,
    getJobApplicationByIdForJobSeekerService
} from '../services/jobApplicationService';

const getJobApplicationsForJobSeeker = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getJobApplicationsByJobSeekerService(req);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof ErrorHandler) {
            res.status(error.status || 500).json({ success: false, message: error.message });
        } else {
            next(error);
        }
    }
};

const getJobApplicationByIdForJobSeeker = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobApplicationId = parseInt(req.params.jobApplicationId);
        const result = await getJobApplicationByIdForJobSeekerService(req, jobApplicationId);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof ErrorHandler) {
            res.status(error.status || 500).json({ success: false, message: error.message });
        } else {
            next(error);
        }
    }
};

export { getJobApplicationsForJobSeeker, getJobApplicationByIdForJobSeeker } 