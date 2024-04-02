import { prisma } from "../config/db/dbConnection";

export const findJobApplicationsByJobSeekerIdDao = async (jobSeekerId: number): Promise<any[]> => {
    return await prisma.job_application.findMany({
        where: {
            job_seeker_id: jobSeekerId,
        },
        include: {
            job: true,
            company: true, 
        },
    });
};

