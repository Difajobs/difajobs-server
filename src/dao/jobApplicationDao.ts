import { prisma } from "../config/db/dbConnection";

export const getJobApplicationsByCompanyIdDao = async (companyId: number): Promise<any[]> => {
    return await prisma.job_application.findMany({
        where: {
            company_id: companyId,
        },
        include: {
            job_seeker: true,
            job: true,
        },
    });
};