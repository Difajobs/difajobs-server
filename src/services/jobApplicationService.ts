import ErrorHandler from '../utils/errorHandler';
import * as jobApplicationDao from '../dao/jobApplicationDao';
import { loggedUser, getToken } from '../utils/decodedToken';
import { Request } from 'express';
import { prisma } from "../config/db/dbConnection";

export const getJobApplicationsByStatusAndCompanyService = async (req: Request, status: string): Promise<any> => {
    try {
        const decodedToken = getToken(req);
        if (!decodedToken) {
            throw new ErrorHandler({
                success: false,
                message: 'Invalid or expired token',
                status: 401,
            });
        }

        const user = loggedUser(decodedToken);
        if (!user || !user.userId) {
            throw new ErrorHandler({
                success: false,
                message: 'User ID does not exist.',
                status: 404,
            });
        }

        const company = await prisma.company.findFirst({
            where: {
                user_id: user.userId,
            },
        });
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company profile does not exist for the given user ID.',
                status: 404,
            });
        }

        const jobApplications = await jobApplicationDao.getJobApplicationsByCompanyIdAndStatusDao(company.id, status);
        return {
            success: true,
            message: 'Job applications retrieved successfully.',
            data: jobApplications,
        };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        const errorStatus = error instanceof ErrorHandler ? error.status : 500;
        throw new ErrorHandler({
            success: false,
            message: errorMessage,
            status: errorStatus,
        });
    }
}
