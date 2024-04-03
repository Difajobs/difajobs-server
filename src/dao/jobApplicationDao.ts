import { prisma } from "../config/db/dbConnection";

export const getJobApplicationsByCompanyIdAndStatusDao = async (companyId: number, status: string): Promise<any[]> => {
    return prisma.job_application.findMany({
        where: {
            company_id: companyId,
            status: status,
        },
        include: {
            job_seeker: true,
            job: true,
            answers: true,
        },
    });
};
