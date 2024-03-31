import { Request, Response, NextFunction } from 'express';
import { createJobSeekerCertificateService, deleteJobSeekerCertificateService, getJobSeekerCertificateListService, updateJobSeekerCertificateService } from '../services/certificateService';
import { loggedUser } from '../utils/decodedToken';

const createJobSeekerCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const userData: Certificate = req.body
        const result = await createJobSeekerCertificateService(userId, userData)
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
        const { userId } = loggedUser(req.user!)
        const result = await getJobSeekerCertificateListService(userId)
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
        const { userId } = loggedUser(req.user!)
        const certificateId  = parseInt(req.params.certificateId)
        const updateData = req.body
        const result = await updateJobSeekerCertificateService(userId, certificateId, updateData)
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
        const { userId } = loggedUser(req.user!)
        const certificateId = parseInt(req.params.certificateId)
        const result = await deleteJobSeekerCertificateService(userId, certificateId)
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