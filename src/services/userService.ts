import ErrorHandler from '../utils/errorHandler';
import { getEmail, getOneJobSeeker, postCreateJobSeeker, postCreateRecruiter, updateJobSeekerData } from '../dao/userDao';
import bcryptjs from "bcryptjs";
import { getJobSeekerDisabilityList, postCreateListDisability } from '../dao/disabilityDao';
import { getJobSeekerSkillList } from '../dao/skillsDao';
import { getJobSeekerCertificateList } from '../dao/certificateDao';
import * as jwt from "jsonwebtoken"
import { add } from "date-fns";
import JWT_TOKEN from '../config/jwt/jwt';

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
        const jobSeekerDisabilityList = await getJobSeekerDisabilityList(jobSeeker.id)
        if (!jobSeekerDisabilityList) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker disability list not found',
                status: 404
            });
        }
        const jobSeekerSkillList = await getJobSeekerSkillList(jobSeeker.id)
        const jobSeekerCertificateList = await getJobSeekerCertificateList(jobSeeker.id)
        return {
            success: true,
            message: "Successfully fetch Job Seeker Profile.",
            data: { jobSeeker, jobSeekerDisabilityList, jobSeekerSkillList, jobSeekerCertificateList }
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
