import { getOneCompany } from '../dao/companyDao';
import { getAllJobListing, getCompanyId, getCompanyJobsList, postJob, searchJobListingByTitle, searchJobListingByLocation, deleteJobByIdAndCompanyId } from '../dao/jobsDao';
import { postCreateListAbility } from '../dao/abilityDao';
import ErrorHandler from '../utils/errorHandler';
import { createSkills, getSkillListByName } from '../dao/skillsDao';
import { postCreateRequiredSkills } from '../dao/requiredSkillDao';
import { postCreateQuestions } from '../dao/questionsDao';

// ------ create jobs ------
const createJobService = async (userId: number, userData: JobCreate, ability_id: number[], skillNames: string[], question_1: string, question_2: string, question_3: string) => {
    try {
        const company = await getCompanyId(userId);
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company not found',
                status: 404
            });
        }
        const job = await postJob(company.id, userData);
        const checkSkills = await getSkillListByName(skillNames);

        const createRequiredSkill = async () => {
            const skills: any = [];
            if (checkSkills.length > 0) {
                await Promise.all(checkSkills.map(async (skill) => {
                    const addExistingSkill = await postCreateRequiredSkills(job.id, skill.id);
                    skills.push(addExistingSkill);
                }));
            } else {
                await Promise.all(skillNames.map(async (skill) => {
                    const newSkill = await createSkills(skill);
                    const addNewSkill = await postCreateRequiredSkills(job.id, newSkill.id);
                    skills.push(addNewSkill);
                }));
            }
            return skills;
        };

        const listAbility = await postCreateListAbility(job.id, ability_id);
        const requiredSkills = await createRequiredSkill();
        const additionalQuestion = await postCreateQuestions(job.id, question_1, question_2, question_3)
        return {
            success: true,
            message: "New job created successfully",
            data: { job, listAbility, requiredSkills, additionalQuestion }
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    }
};

const getCompanyJobsListService = async (companyId: number) => {
    try {
        const company = await getOneCompany(companyId)
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company Not Found..',
                status: 404
            });
        } 

        const companyJobsList = await getCompanyJobsList(companyId)

        return {
            success: true,
            message: "Successfully Fetch Company Job listing list:",
            data: companyJobsList
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

const getAllJobsService = async (pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const jobs = await getAllJobListing(pageSize, offset)

        if (!jobs.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }

        return {
            success: true,
            message: "Successfully Fetch Job listings:",
            data: jobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const searchJobByTitleService = async (title: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobs = await searchJobListingByTitle(title, pageSize, offset)
        if (!searchJobs.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: searchJobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const searchJobByLocationService = async (location: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobs = await searchJobListingByLocation(location, pageSize, offset)
        if (!searchJobs.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: searchJobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const searchJobByTitleAndLocationService = async (location: string | undefined, title: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobsByLocation = await searchJobListingByLocation(location, pageSize, offset)
        const searchJobsByTitle = await searchJobListingByTitle(title, pageSize, offset)

        if (!searchJobsByLocation.length && !searchJobsByTitle.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }
        console.log(searchJobsByLocation, searchJobsByTitle )

        const jobsByLocation = searchJobsByLocation.map(job => ({
            ...job,
            min_salary: job.min_salary?.toString(),
            max_salary: job.max_salary?.toString(),
            list_ability: job.list_ability.map(ability => ability.ability?.name),
            required_skills: job.required_skills.map(skill => skill.skills.name)
        }))

        const jobsByTitle = searchJobsByTitle.map(job => ({
            ...job,
            min_salary: job.min_salary?.toString(),
            max_salary: job.max_salary?.toString(),
            list_ability: job.list_ability.map(ability => ability.ability?.name),
            required_skills: job.required_skills.map(skill => skill.skills.name)
        }))

        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: [...jobsByLocation, ...jobsByTitle]
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

const deleteJobService = async (userId: number, jobId: number) => {
    try {
        const company = await getCompanyId(userId);
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company not found',
                status: 404
            });
        }
        const deletedJob = await deleteJobByIdAndCompanyId(jobId, company.id);
        if (deletedJob.count === 0) {
            throw new ErrorHandler({
                success: false,
                message: 'Job not found or does not belong to your company',
                status: 404
            });
        }
        return {
            success: true,
            message: "Job deleted successfully",
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    }
};

export { createJobService, getCompanyJobsListService, getAllJobsService, searchJobByTitleService, searchJobByLocationService, searchJobByTitleAndLocationService, deleteJobService }