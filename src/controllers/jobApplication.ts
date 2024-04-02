import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    getJobApplicationsByJobSeekerService,
    getJobApplicationByIdForJobSeekerService
    // getJobApplicationsForCompanyService,
    // updateJobApplicationStatusService,
    // getJobApplicationsByStatusAndJobSeekerService,
    // getJobApplicationsByStatusAndCompanyService,
    // createJobApplicationService
} from '../services/jobApplicationService';

// Job Application Controller
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
        if (isNaN(jobApplicationId)) {
            throw new ErrorHandler({ success: false, message: "Invalid job application ID.", status: 400 });
        }
        
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