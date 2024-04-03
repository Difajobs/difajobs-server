import { prisma } from "../config/db/dbConnection";

export const getJobApplicationByIdAndCompanyIdDao = async (jobApplicationId: number, companyId: number): Promise<any | null> => {
    return prisma.job_application.findFirst({
        where: {
            id: jobApplicationId,
            company_id: companyId,
        },
        include: {
            job_seeker: true,
            job: true,
            answers: true,
        },
    });
};

export const updateJobApplicationStatusDao = async (jobApplicationId: number, companyId: number, newStatus: string): Promise<any> => {
    return prisma.job_application.updateMany({
        where: {
            id: jobApplicationId,
            company_id: companyId,
        },
        data: {
            status: newStatus,
        },
    });
};
