import e, { Request, Response, NextFunction } from 'express';
import { getCompanyJobsListService } from '../services/jobsService';

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

export { getCompanyJobList }