import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createJobSeekerSkills = async (jobSeekerId: number, skillIds: number[]) => {
    try {
        const createSkills = await Promise.all(skillIds.map(async (skillId) => {
            const skillsData = await prisma.job_seeker_skills.create({
                data: {
                    job_seeker_id: jobSeekerId,
                    skill_id: skillId
                }
            });
            return skillsData;
        }));
        return createSkills;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getJobSeekerSkillList = async (jobSeekerId: number) => {
    try {
        const jobSeekerSkills = await prisma.job_seeker_skills.findMany({
            where: { job_seeker_id: jobSeekerId },
            include: { skills: true }
        });
        return jobSeekerSkills.map(skill => skill.skills);
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getOneJobSeekerSkill = async (jobSeekerSkillId: number) => {
    try {
        const jobSeeker = await prisma.job_seeker_skills.findUnique({
            where: {id: jobSeekerSkillId}
        })
        return jobSeeker
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const deleteJobSeekerSkill = async (jobSeekerSkillId: number) => {
    try {
        const jobSeeker = await prisma.job_seeker_skills.delete({
            where: {id: jobSeekerSkillId}
        })
        return jobSeeker
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

export { createJobSeekerSkills, getJobSeekerSkillList, getOneJobSeekerSkill, deleteJobSeekerSkill }