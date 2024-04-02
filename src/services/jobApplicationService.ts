import ErrorHandler from '../utils/errorHandler';
import { prisma } from '../config/db/dbConnection';
import * as jobApplicationDao from '../dao/jobApplicationDao';
import { loggedUser, getToken } from '../utils/decodedToken';
import { Request } from 'express';

export const getJobApplicationsByJobSeekerService = async (req: Request): Promise<any> => {
    try {
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

        const jobSeeker = await prisma.job_seeker.findFirst({
            where: {
                user_id: userId,
            },
        });
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job seeker profile does not exist for the given user ID.',
                status: 404,
            });
        }

        const jobApplications = await jobApplicationDao.findJobApplicationsByJobSeekerIdDao(jobSeeker.id);
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
