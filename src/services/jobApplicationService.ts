import ErrorHandler from '../utils/errorHandler';
import { prisma } from '../config/db/dbConnection';
import * as jobApplicationDao from '../dao/jobApplicationDao';
import { loggedUser, getToken } from '../utils/decodedToken';
import { Request } from 'express';

export const createJobApplicationService = async (req: Request, jobId: number, coverLetter: string, answers: { answer_1: string; answer_2: string; answer_3: string; }) => {
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

        const existingApplication = await prisma.job_application.findFirst({
            where: {
                job_seeker_id: jobSeeker.id,
                job_id: jobId,
            },
        });
        if (existingApplication) {
            throw new ErrorHandler({
                success: false,
                message: 'You have already applied for this job.',
                status: 400,
            });
        }

        const job = await prisma.jobs.findUnique({
            where: {
                id: jobId,
            },
            select: {
                company_id: true,
            },
        });
        if (!job) {
            throw new ErrorHandler({
                success: false,
                message: 'Job ID does not exist.',
                status: 404,
            });
        }

        const newJobApplication = await jobApplicationDao.createJobApplicationDao(jobSeeker.id, jobId, job.company_id, coverLetter, answers);
        return {
            success: true,
            message: 'Job application and answers created successfully.',
            data: newJobApplication,
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
