import { prisma } from "../config/db/dbConnection";

export const getJobApplicationsByCompanyIdDao = async (companyId: number): Promise<any[]> => {
    return await prisma.job_application.findMany({
        where: {
            company_id: companyId,
        },
        include: {
            job_seeker: true,
            job: true,
            answers:true,
        },
    });
};

export const getJobApplicationByIdAndCompanyIdDao = async (jobApplicationId: number, companyId: number): Promise<any | null> => {
    return prisma.job_application.findFirst({
        where: {
            id: jobApplicationId,
            company_id: companyId,
        },
        include: {
            job_seeker: true,
            job: true,
            answers:true,
        },
    });
};