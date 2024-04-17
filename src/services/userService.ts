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
            data: {
                ...jobSeeker,
                job_seeker_skills: jobSeeker.job_seeker_skills.map(skill => skill.skills.name),
                disabilities: jobSeeker.disabilities.map(disability => {
                    return {
                        category: disability.disability.category.name,
                        name: disability.disability.name
                    };
                    
                }),
                certificates: jobSeeker.certificates.map(certificate => {
                    return {
                        name: certificate.name,
                        description: certificate.description
                    };
                }),
            }
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

const updateJobSeekerDataService = async (userId: number, updateData: JobSeekerDataUpdate) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId);
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        }

        if ("fullname" in updateData || "dob" in updateData || "gender" in updateData) {
            throw new ErrorHandler({
                success: false,
                message: 'Forbidden update field.',
                status: 400
            });
        }

        const updatedData = await updateJobSeekerData(jobSeeker.id, updateData);
        return {
            success: true,
            message: "Successfully Update Job Seeker Personal Data:",
            data: updatedData
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
