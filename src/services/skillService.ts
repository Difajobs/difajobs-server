import { createJobSeekerSkill, createSkills, deleteJobSeekerSkill, getJobSeekerSkillList, getSkillByName } from '../dao/skillsDao';
import { getOneJobSeeker } from '../dao/userDao';
import ErrorHandler from '../utils/errorHandler';

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

export { createnewJobSeekerSkillService, deleteJobSeekerSkillService }