import { prisma } from "../config/db/dbConnection";

export const createJobApplicationDao = async (jobSeekerId: number, jobId: number, companyId: number, coverLetter:string): Promise<any> => {
    return await prisma.job_application.create({
        data: {
            job_seeker_id: jobSeekerId,
            job_id: jobId,
            company_id: companyId,
            cover_letter: coverLetter,
            status: 'pending',
        },
    });
};