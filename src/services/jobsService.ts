import { getOneCompany } from '../dao/companyDao';
import { getCompanyId, getCompanyJobsList, postJob } from '../dao/jobsDao';
import { postCreateListAbility } from '../dao/abilityDao';
import ErrorHandler from '../utils/errorHandler';

// ------ create jobs ------
const createJobService = async (userData: JobCreate, ability_id: number[]) => {
    try {
        const company = await getCompanyId(4);        
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

export { createJobService, getCompanyJobsListService }