import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/errorHandler';
import { 
    createJobApplicationService
} from '../services/jobApplicationService';

const createJobApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { jobId, coverLetter, answer_1, answer_2, answer_3 } = req.body;
        const answers = { answer_1, answer_2, answer_3 };
        const result = await createJobApplicationService(req, jobId, coverLetter, answers);
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