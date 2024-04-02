import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    // getJobApplicationsByJobSeekerService,
    // getJobApplicationByIdForJobSeekerService
    // getJobApplicationsForCompanyService,
    // getJobApplicationByIdForCompanyService
    updateJobApplicationStatusService,
    // getJobApplicationsByStatusAndJobSeekerService,
    // getJobApplicationsByStatusAndCompanyService,
    // createJobApplicationService
} from '../services/jobApplicationService';

const STATUS_PROGRESSION = ["pending", "reviewing", "interview", "reject", "hired"];
export const updateJobApplicationStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobApplicationId = parseInt(req.params.jobApplicationId);
        const { status: newStatus } = req.body;

        const result = await updateJobApplicationStatusService(req, jobApplicationId, newStatus);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof ErrorHandler) {
            res.status(error.status || 500).json({ success: false, message: error.message });
        } else {
            next(error);
        }
    }
};
