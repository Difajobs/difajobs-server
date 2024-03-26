import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { createJobSeekerCertificateService, deleteJobSeekerCertificateService, getJobSeekerCertificateListService, updateJobSeekerCertificateService } from '../services/certificateService';

const createJobSeekerCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as JwtPayload).user
        const userData: Certificate = req.body
        const result = await createJobSeekerCertificateService(user.id, userData)
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

const getJobSeekerCertificateList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as JwtPayload).user
        const result = await getJobSeekerCertificateListService(user.id)
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

const updateJobSeekerCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as JwtPayload).user
        const certificateId  = parseInt(req.params.certificateId)
        const updateData = req.body
        const result = await updateJobSeekerCertificateService(user.id, certificateId, updateData)
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

const deleteJobSeekerCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as JwtPayload).user
        const certificateId = parseInt(req.params.certificateId)
        const result = await deleteJobSeekerCertificateService(user.id, certificateId)
        if(result.success) {
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

export { createJobSeekerCertificate, getJobSeekerCertificateList, updateJobSeekerCertificate, deleteJobSeekerCertificate }