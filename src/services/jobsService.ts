import { getOneCompany } from '../dao/companyDao';
import { getAllJobListing, getCompanyId, getCompanyJobsList, postJob, searchJobListingByTitle, searchJobListingByLocation } from '../dao/jobsDao';
import { postCreateListAbility } from '../dao/abilityDao';
import ErrorHandler from '../utils/errorHandler';
import { createSkills, getSkillListByName } from '../dao/skillsDao';
import { postCreateRequiredSkills } from '../dao/requiredSkillDao';

// ------ create jobs ------
const createJobService = async (userId: number, userData: JobCreate, ability_id: number[], skillNames: string[]) => {
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

        return {
            success: true,
            message: "New job created successfully",
            data: { job, listAbility, requiredSkills }
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

        return {
            success: true,
            message: "Successfully Fetch Job listings:",
            data: jobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString,
                max_salary: job.max_salary?.toString
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

const searchJobByTitleService = async (searchTitle: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobs = await searchJobListingByTitle(searchTitle, pageSize, offset)
        if (!searchJobs) {
            throw new ErrorHandler({
                success: false,
                message: `Job listing with ${searchTitle} Not Available..`,
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: searchJobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString,
                max_salary: job.max_salary?.toString
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

const searchJobByLocationService = async (searchLocation: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobs = await searchJobListingByLocation(searchLocation, pageSize, offset)
        if (!searchJobs) {
            throw new ErrorHandler({
                success: false,
                message: `Job listing Not Found in ${searchLocation}..`,
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: searchJobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString,
                max_salary: job.max_salary?.toString
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

const searchJobByTitleAndLocationService = async (searchLocation: string | undefined, searchTitle: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobsByLocation = await searchJobListingByLocation(searchLocation, pageSize, offset)
        const searchJobsByTitle = await searchJobListingByTitle(searchTitle, pageSize, offset)

        if (!searchJobsByLocation && !searchJobsByTitle) {
            throw new ErrorHandler({
                success: false,
                message: `Job listing with ${searchTitle} Not Found in ${searchLocation}..`,
                status: 404
            });
        }

        const jobsByLocation = searchJobsByLocation.map(job => ({
            ...job,
            min_salary: job.min_salary?.toString,
            max_salary: job.max_salary?.toString
        }))

        const jobsByTitle = searchJobsByTitle.map(job => ({
            ...job,
            min_salary: job.min_salary?.toString,
            max_salary: job.max_salary?.toString
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

export { createJobService, getCompanyJobsListService, getAllJobsService, searchJobByTitleService, searchJobByLocationService, searchJobByTitleAndLocationService }