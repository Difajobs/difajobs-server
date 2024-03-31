import { createJobSeekerSkill, createSkills, deleteJobSeekerSkill, getAllSkill, getJobSeekerSkillList, getSkillByName } from '../dao/skillsDao';
import { getOneJobSeeker } from '../dao/userDao';
import ErrorHandler from '../utils/errorHandler';

const getAllSkillService = async () => {
    try {

        const skillList = await getAllSkill()
        return {
            success: true,
            message: "Successfully Fetch All Skill:",
            data: skillList
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const getJobSeekerSkillListService = async (userId: number) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        } 

        const skillList = await getJobSeekerSkillList(jobSeeker.id)
        return {
            success: true,
            message: "Successfully Fetch Job Seeker Skill List:",
            data: skillList
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const createnewJobSeekerSkillService = async (userId: number, skillName: string) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
            
        } 
        const checkSkill = await getSkillByName(skillName)
        if (checkSkill) {
            const addExistingSkill = await createJobSeekerSkill(jobSeeker.id, checkSkill.id)
            return {
                success: true,
                message: "Successfully added existing skill to job seeker.",
                data: addExistingSkill
            }
        } else {
            const createNewSkill = await createSkills(skillName)
            const addNewSkill = await createJobSeekerSkill(jobSeeker.id, createNewSkill.id)
            return {
                success: true,
                message: "Successfully added new skill to job seeker.",
                data: { createNewSkill, addNewSkill }
            }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const deleteJobSeekerSkillService = async (userId: number, JobSeekerSkillId: number) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        } 
        const deleteSkill = await deleteJobSeekerSkill(JobSeekerSkillId, jobSeeker.id)
        return {
            success: true,
            message: "Successfully deleted a skill",
            data: deleteSkill
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

export { getAllSkillService, getJobSeekerSkillListService, createnewJobSeekerSkillService, deleteJobSeekerSkillService }