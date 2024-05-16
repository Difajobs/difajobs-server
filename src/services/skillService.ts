import { getOneCompanyByUserId } from '../dao/companyDao';
import { getOneJobListing } from '../dao/jobsDao';
import { deleteRequiredSkill, getRequiredSkill, postCreateRequiredSkills } from '../dao/requiredSkillDao';
import { createJobSeekerSkill, createSkills, deleteJobSeekerSkill, getAllSkill, getJobSeekerSkillList, getSkillByName } from '../dao/skillsDao';
import { getJobSeekerId } from '../dao/userDao';
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
        const jobSeeker = await getJobSeekerId(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
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
        const jobSeeker = await getJobSeekerId(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
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
        const jobSeeker = await getJobSeekerId(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
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

const createRequiredSkillService = async (userId:number, jobId: number, skillName: string) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }

        const job = await getOneJobListing(jobId)
        if (!job) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Listing Not Found..',
                status: 404
            });
        }

        if (job.company_id !== company.id) {
            throw new ErrorHandler({
                success: false,
                message: "Cannot Update Job Listing...",
                status: 400
            })
        }

        const checkSkill = await getSkillByName(skillName)
        if (checkSkill) {
            const addExistingSkill = await postCreateRequiredSkills(jobId, checkSkill.id)
            return {
                success: true,
                message: "Successfully added existing skill to job required skill.",
                data: addExistingSkill
            }
        } else {
            const createNewSkill = await createSkills(skillName)
            const addNewSkill = await postCreateRequiredSkills(jobId, createNewSkill.id)
            return {
                success: true,
                message: "Successfully added new skill to job required skill.",
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

const deleteRequiredSkillService = async (userId: number, requiredSkillId: number) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }

        const requiredSkill = await getRequiredSkill(requiredSkillId)
        if (!requiredSkill) {
            throw new ErrorHandler({
                success: false,
                message: "Required Skill Not Found...",
                status: 404
            })  
        }

        const job = await getOneJobListing(requiredSkill.job_id)
        if (job?.company_id !== company.id) {
            throw new ErrorHandler({
                success: false,
                message: "Cannot Update Job Listing...",
                status: 400
            })
        }

        const deleteSkill = await deleteRequiredSkill(requiredSkillId)

        return {
            success: true,
            message: "Successfully removed skill from job required skill.",
            data: deleteSkill
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

export { 
    getAllSkillService, 
    getJobSeekerSkillListService, 
    createnewJobSeekerSkillService, 
    deleteJobSeekerSkillService,
    createRequiredSkillService,
    deleteRequiredSkillService
}