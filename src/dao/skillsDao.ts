import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createSkills = async (skillName: string) => {
    try {
        const createSkill = await prisma.skills.create({
            data: {
                name: skillName
            }
        })
        return createSkill
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

const getSkillByName = async (skillName: string) => {
    try {
        const skill = await prisma.skills.findFirst({
            where: {
                name: skillName
            }
        })
        return skill
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

const getSkillListByName = async (skillNames: string[]): Promise<Skill[]> => {
    try {
        const listSkill: (Skill | null)[] = await Promise.all(skillNames.map(async (skill) => {
            const createdRecord: Skill[] = await prisma.skills.findMany({
                where: {
                    name: skill
                }
            });
            console.log(createdRecord)
            return createdRecord.length > 0 ? createdRecord[0] : null;
        }));
        const filteredListSkill: Skill[] = listSkill.filter(skill => skill !== null) as Skill[];
        console.log('Fetched skills:', filteredListSkill);
        return filteredListSkill;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const getAllSkill = async () => {
    try {
        const skills = await prisma.skills.findMany()
        return skills
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

const createJobSeekerSkill = async (jobSeekerId: number, skillId: number) => {
    try {
        const createSkill = await prisma.job_seeker_skills.create({
            data: {
                job_seeker_id: jobSeekerId,
                skill_id: skillId
            },
            include: { skills: true }
        });

        return createSkill;
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

const deleteJobSeekerSkill = async (jobSeekerSkillId: number, jobSeekerId: number) => {
    try {
        const jobSeeker = await prisma.job_seeker_skills.delete({
            where: {id: jobSeekerSkillId, job_seeker_id: jobSeekerId},
            include: {
                skills: {
                    select: {
                        name: true
                    }
                }
            }
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

export { createSkills, getAllSkill, getSkillByName, createJobSeekerSkill, getJobSeekerSkillList, getOneJobSeekerSkill, deleteJobSeekerSkill, getSkillListByName }