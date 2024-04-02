import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    // getJobApplicationsByJobSeekerService,
    // getJobApplicationByIdForJobSeekerService
    // getJobApplicationsForCompanyService,
    // getJobApplicationByIdForCompanyService
    // updateJobApplicationStatusService,
    // getJobApplicationsByStatusAndJobSeekerService,
    getJobApplicationsByStatusAndCompanyService,
    // createJobApplicationService
} from '../services/jobApplicationService';

const getJobApplicationsByCompanyAndStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const status = req.query.status as string;

        if (!status) {
            return res.status(400).json({ success: false, message: "Status query parameter is required." });
        }

        const result = await getJobApplicationsByStatusAndCompanyService(req, status);

        if (!result.data || result.data.length === 0) {
            return res.status(404).json({ success: false, message: "No job applications found for the specified status." });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An unexpected error occurred." });
    }
};


export {getJobApplicationsByCompanyAndStatus}
