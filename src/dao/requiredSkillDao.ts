import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const postCreateRequiredSkills = async (job_id: number, skill_id: number) => {
    try {
        const requiredSkill = await prisma.required_skills.create({
            data: {
                job_id: job_id,
                skill_id: skill_id
            }
        });
        const skill = await prisma.skills.findUnique({
            where: {
                id:requiredSkill.skill_id
            }
        })
        return {
            id: requiredSkill.id,
            job_id: requiredSkill.job_id,
            skill_id: requiredSkill.skill_id,
            name: skill?.name
        }
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

const deleteRequiredSkill = async (requiredSkillId: number) => {
    try {
        const requiredSkill = await prisma.required_skills.delete({
            where: {id: requiredSkillId}
        });
        return requiredSkill
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

const getRequiredSkill = async (requiredSkillId: number) => {
    try {
        const requiredSkill = await prisma.required_skills.findUnique({
            where: {id: requiredSkillId}
        })

        return requiredSkill
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

export { postCreateRequiredSkills, deleteRequiredSkill, getRequiredSkill }