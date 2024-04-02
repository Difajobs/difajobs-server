import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    // getJobApplicationsForJobSeekerService,
    // getJobApplicationsForCompanyService,
    // updateJobApplicationStatusService,
    // getJobApplicationsByStatusAndJobSeekerService,
    // getJobApplicationsByStatusAndCompanyService,
    createJobApplicationService
} from '../services/jobApplicationService';

const createJobApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { jobId, coverLetter } = req.body;
        const result = await createJobApplicationService(req, jobId, coverLetter);
        res.status(201).json(result);
    } catch (error) {
        if (error instanceof ErrorHandler) {
            res.status(error.status || 500).json({ success: false, message: error.message });
        } else {
            next(error);
        }
    }
};


export { createJobApplication } 