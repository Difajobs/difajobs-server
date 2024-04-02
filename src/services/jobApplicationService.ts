import ErrorHandler from '../utils/errorHandler';
import { prisma } from '../config/db/dbConnection';
import * as jobApplicationDao from '../dao/jobApplicationDao';
import { loggedUser, getToken } from '../utils/decodedToken';
import { Request } from 'express';

export const getJobApplicationsForCompanyService = async (req: Request): Promise<any> => {
    try {
        const { userId } = loggedUser(getToken(req)); 

        const company = await prisma.company.findFirst({
            where: {
                user_id: userId,
            },
        });
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company profile does not exist for the given user ID.',
                status: 404,
            });
        }

        const jobApplications = await jobApplicationDao.getJobApplicationsByCompanyIdDao(company.id);
        return {
            success: true,
            message: 'Job applications retrieved successfully.',
            data: jobApplications,
        };
    } catch (error) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            message: error instanceof Error ? error.message : 'An unexpected error occurred',
            status: 500,
        });
    }
};

export const getJobApplicationByIdForCompanyService = async (req: Request, jobApplicationId: number): Promise<any> => {
    const decodedToken = getToken(req);
    if (!decodedToken) {
        throw new ErrorHandler({
            success: false,
            message: 'Invalid or expired token',
            status: 401,
        });
    }
    const { userId } = loggedUser(decodedToken); 
    if (!userId) {
        throw new ErrorHandler({
            success: false,
            message: 'User ID does not exist.',
            status: 404,
        });
    }

    const company = await prisma.company.findFirst({
        where: {
            user_id: userId,
        },
    });
    if (!company) {
        throw new ErrorHandler({
            success: false,
            message: 'Company profile does not exist for the given user ID.',
            status: 404,
        });
    }

    const jobApplication = await jobApplicationDao.getJobApplicationByIdAndCompanyIdDao(jobApplicationId, company.id);
    if (!jobApplication) {
        throw new ErrorHandler({
            success: false,
            message: 'Job application not found or does not belong to your company.',
            status: 404,
        });
    }

    return {
        success: true,
        message: 'Job application retrieved successfully.',
        data: jobApplication,
    };
};