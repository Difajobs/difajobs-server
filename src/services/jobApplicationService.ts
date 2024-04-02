import ErrorHandler from '../utils/errorHandler';
import { prisma } from '../config/db/dbConnection';
import * as jobApplicationDao from '../dao/jobApplicationDao';
import { loggedUser, getToken } from '../utils/decodedToken';
import { Request } from 'express';

const STATUS_PROGRESSION = ["pending", "reviewing", "interview", "reject", "hired"];

export const updateJobApplicationStatusService = async (req: Request, jobApplicationId: number, newStatus: string): Promise<any> => {
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
            where: { user_id: user.userId },
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

        const currentStatusIndex = STATUS_PROGRESSION.indexOf(jobApplication.status);
        const newStatusIndex = STATUS_PROGRESSION.indexOf(newStatus);
        if (newStatusIndex === -1) {
            throw new ErrorHandler({
                success: false,
                message: 'Invalid status provided.',
                status: 400,
            });
        }
        if (newStatusIndex <= currentStatusIndex) {
            throw new ErrorHandler({
                success: false,
                message: 'Cannot move to a previous or the same status.',
                status: 400,
            });
        }

        await jobApplicationDao.updateJobApplicationStatusDao(jobApplicationId, company.id, newStatus);
        return {
            success: true,
            message: 'Job application status updated successfully.',
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
