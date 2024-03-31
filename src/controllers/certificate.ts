import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { createJobSeekerCertificateService, deleteJobSeekerCertificateService, getJobSeekerCertificateListService, updateJobSeekerCertificateService } from '../services/certificateService';
import { getToken, loggedUser } from '../utils/decodedToken';

const createJobSeekerCertificate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = getToken(req)
        const { userId } = loggedUser(token)
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
        const token = getToken(req)
        const { userId } = loggedUser(token)
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
        const token = getToken(req)
        const { userId } = loggedUser(token)
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
        const token = getToken(req)
        const { userId } = loggedUser(token)
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