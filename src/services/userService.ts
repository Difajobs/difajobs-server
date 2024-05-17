import ErrorHandler from '../utils/errorHandler';
import { getJobSeekerId, getJobSeekerProfile, updateJobSeekerData } from '../dao/userDao';

const getJobSeekerProfileService = async (userId: number) => {
    try {
        const jobSeeker = await getJobSeekerId(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
                status: 404
            });
        }

        const jobSeekerProfile = await getJobSeekerProfile(jobSeeker.id)
        
        if (!jobSeekerProfile) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Profile not found',
                status: 404
            });
        }

        return {
            success: true,
            message: "Successfully fetch Job Seeker Profile.",
            data: {
                ...jobSeekerProfile,
                job_seeker_skills: jobSeekerProfile.job_seeker_skills.map(skill => skill.skills.name),
                disabilities: jobSeekerProfile.disabilities.map(disability => {
                    return disability.disability.name
                }),
                certificates: jobSeekerProfile.certificates.map(certificate => {
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
    
    if ("fullname" in updateData || "dob" in updateData || "gender" in updateData) {
        throw new ErrorHandler({
            success: false,
            message: 'Forbidden update field.',
            status: 400
        });
    }
    try {
        const jobSeeker = await getJobSeekerId(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
                status: 404
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
