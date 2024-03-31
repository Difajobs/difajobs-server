import ErrorHandler from '../utils/errorHandler';
import { getOneJobSeeker, updateJobSeekerData } from '../dao/userDao';

const getJobSeekerProfileService = async (userId: number) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully fetch Job Seeker Profile.",
            data: jobSeeker
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    };
};

const updateJobSeekerDataService = async (userId: number, updateData: any) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId);
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        }
        const filteredUpdateData: any = {};
        for (const key in updateData) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }
        const updatedPersonalData = await updateJobSeekerData(jobSeeker.id, filteredUpdateData);
        return {
            success: true,
            message: "Successfully Update Job Seeker Personal Data:",
            data: { updatedPersonalData }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

export { getJobSeekerProfileService, updateJobSeekerDataService }
