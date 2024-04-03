import { prisma } from "../config/db/dbConnection";

export const findJobApplicationsByJobSeekerIdDao = async (jobSeekerId: number): Promise<any[]> => {
    return await prisma.job_application.findMany({
        where: {
            job_seeker_id: jobSeekerId,
        },
        include: {
            job: true,
            company: true, 
            answers: true,
        },
    });
};


export const findJobApplicationByIdAndJobSeekerIdDao = async (jobApplicationId: number, jobSeekerId: number): Promise<any> => {
    return await prisma.job_application.findFirst({
        where: {
            id: jobApplicationId,
            job_seeker_id: jobSeekerId,
        },
        include: {
            job: true,
            company: true,
            answers: true,
        },
    });
};

export const getJobApplicationsByJobSeekerIdAndStatusDao = async (jobSeekerId: number, status: string): Promise<any[]> => {
    return prisma.job_application.findMany({
        where: {
            job_seeker_id: jobSeekerId,
            status: status,
        },
        include: {
            job: true,
            company: true,
            answers: true,
        },
    });
};



