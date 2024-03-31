import { getOneCompany } from '../dao/companyDao';
import { getAllJobListing, getCompanyId, getCompanyJobsList, postJob, searchJobListing } from '../dao/jobsDao';
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

const searchJobService = async (searchTitle: string | undefined, searchLocation: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        if (searchTitle || searchLocation) {
            const searchJobs = await searchJobListing(searchTitle, searchLocation, pageSize, offset)
            return {
                success: true,
                message: "Successfully Fetch Job Listings:",
                data: searchJobs
            };
        } 
            const allJob = await getAllJobListing(pageSize, offset)
            return {
                success: true,
                message: "Successfully Fetch All Job listing:",
                data: allJob
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
export { createJobService, getCompanyJobsListService, searchJobService }