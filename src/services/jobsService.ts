import { getOneCompany } from '../dao/companyDao';
import { getAllJobListing, getCompanyId, getCompanyJobsList, postJob, searchJobListingByTitle, searchJobListingByLocation } from '../dao/jobsDao';
import { postCreateListAbility } from '../dao/abilityDao';
import ErrorHandler from '../utils/errorHandler';

// ------ create jobs ------
const createJobService = async (userId: number, userData: JobCreate, ability_id: number[]) => {
    try {
        const company = await getCompanyId(userId);        
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Conmpany not found',
                status: 404
            })
        }
        const job = await postJob(company.id, userData)
        const listAbility = await postCreateListAbility(job.id, ability_id)
        return {
            success: true,
            message: "New job created successfully",
            data: { job, listAbility }
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
        if (!searchJobs) {
            throw new ErrorHandler({
                success: false,
                message: `Job listing with ${title} Not Available..`,
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
        if (!searchJobs) {
            throw new ErrorHandler({
                success: false,
                message: `Job listing Not Found in ${location}..`,
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

        if (!searchJobsByLocation && !searchJobsByTitle) {
            throw new ErrorHandler({
                success: false,
                message: `Job listing with ${title} Not Found in ${location}..`,
                status: 404
            });
        }

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

export { createJobService, getCompanyJobsListService, getAllJobsService, searchJobByTitleService, searchJobByLocationService, searchJobByTitleAndLocationService }