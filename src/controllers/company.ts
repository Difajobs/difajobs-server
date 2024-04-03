import { Request, Response, NextFunction } from 'express';
import { getCompanyProfileService } from '../services/companyService';

const getCompanyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const  companyId = parseInt(req.params.companyId)
        const result = await getCompanyProfileService(companyId)
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

export { getCompanyProfile }