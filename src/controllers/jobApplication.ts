import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    // getJobApplicationsByJobSeekerService,
    // getJobApplicationByIdForJobSeekerService
    getJobApplicationsForCompanyService,
    getJobApplicationByIdForCompanyService
    // updateJobApplicationStatusService,
    // getJobApplicationsByStatusAndJobSeekerService,
    // getJobApplicationsByStatusAndCompanyService,
    // createJobApplicationService
} from '../services/jobApplicationService';

const getJobApplicationsByCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getJobApplicationsForCompanyService(req);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof ErrorHandler) {
            res.status(error.status || 500).json({ success: false, message: error.message });
        } else {
            next(error);
        }
    }
};

export const getJobApplicationByIdForCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobApplicationId = parseInt(req.params.jobApplicationId);
        if (isNaN(jobApplicationId)) {
            return res.status(400).json({ success: false, message: "Invalid job application ID." });
        }

        const result = await getJobApplicationByIdForCompanyService(req, jobApplicationId);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof ErrorHandler) {
            res.status(error.status || 500).json({ success: false, message: error.message });
        } else {
            next(error);
        }
    }
};

export {getJobApplicationsByCompany}