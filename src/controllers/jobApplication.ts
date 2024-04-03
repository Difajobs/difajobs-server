import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    getJobApplicationsByJobSeekerService,
    getJobApplicationByIdForJobSeekerService,
    getJobApplicationsByStatusAndJobSeekerService
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

const getJobApplicationsByJobSeekerAndStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const status = req.query.status as string;

        if (!status) {
            return res.status(400).json({ success: false, message: "Status query parameter is required." });
        }

        const result = await getJobApplicationsByStatusAndJobSeekerService(req, status);

        if (!result.data || result.data.length === 0) {
            return res.status(404).json({ success: false, message: "No job applications found for the specified status." });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An unexpected error occurred." });
    }
};



export { getJobApplicationsForJobSeeker, getJobApplicationByIdForJobSeeker, getJobApplicationsByJobSeekerAndStatus } 