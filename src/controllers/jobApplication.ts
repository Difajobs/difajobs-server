import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    getJobApplicationsByJobSeekerService,
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

export { getJobApplicationsForJobSeeker } 