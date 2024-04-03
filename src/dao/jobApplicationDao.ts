import { prisma } from '../config/db/dbConnection';

export const createJobApplicationDao = async (
    jobSeekerId: number,
    jobId: number,
    companyId: number,
    coverLetter: string,
    answers: { answer_1: string; answer_2: string; answer_3: string; }
): Promise<any> => {
    return prisma.$transaction(async (prisma) => {
        const jobApplication = await prisma.job_application.create({
            data: {
                job_seeker_id: jobSeekerId,
                job_id: jobId,
                company_id: companyId,
                cover_letter: coverLetter,
                status: 'pending',
            },
        });

        const answersData = await prisma.answers.create({
            data: {
                job_id: jobId,
                job_application_id: jobApplication.id,
                answer_1: answers.answer_1,
                answer_2: answers.answer_2,
                answer_3: answers.answer_3,
            },
        });

        return { jobApplication, answers: answersData };
    });
};
