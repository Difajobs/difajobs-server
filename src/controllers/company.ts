import { Request, Response, NextFunction } from 'express';
import { getAllCompanyService, getCompanyProfileService, updateCompanyDataService } from '../services/companyService';
import { loggedUser } from '../utils/decodedToken';

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

const getAllCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getAllCompanyService()
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

const updateCompanyData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const updateData: CompanyDataUpdate = req.body;
        const result = await updateCompanyDataService(userId, updateData);
        
        if (result.success) {
          res.status(200).json({
            success: true,
            message: result.message,
            data: result.data
          })
        }
    } catch (error) {
        next(error);
    }
  }

export { getCompanyProfile, getAllCompany, updateCompanyData }