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