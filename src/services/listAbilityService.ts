import { deleteListAbility, getListAbility, postCreateListAbility } from '../dao/abilityDao';
import { getOneCompanyByUserId } from '../dao/companyDao';
import { getOneJobListing } from '../dao/jobsDao';
import ErrorHandler from '../utils/errorHandler';

const createListAbilityService = async (userId: number, jobId: number, ability_id: number[]) => {
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
                message: "Job Not Found...",
                status: 404
            })
        }

        if (job.company_id !== company.id) {
            throw new ErrorHandler({
                success: false,
                message: "Cannot Update Job Listing's List Ability...",
                status: 400
            })
        }
        const listAbility = await postCreateListAbility(jobId, ability_id);

        return {
            success: true,
            message: "Successfully Assigned Ability to Job Listing",
            data: listAbility
        };
    }  catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const deleteListAbilityService = async (userId: number, listAbilityId: number) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }
        
        const listAbility = await getListAbility(listAbilityId)

        if (!listAbility) {
            throw new ErrorHandler({
                success: false,
                message: "List Ability Not Found...",
                status: 404
            })
        }

        const job = await getOneJobListing(listAbility.job_id!)
    
        if (!job) {
            throw new ErrorHandler({
                success: false,
                message: "Job Not Found...",
                status: 404
            })
        }

        if (job.company_id !== company.id) {
            throw new ErrorHandler({
                success: false,
                message: "Cannot Update Job Listing's List Ability...",
                status: 400
            })
        }

        const deleteAbility = await deleteListAbility(listAbilityId)

        return {
            success: true,
            message: "Successfully removed ability from job's list ability'.",
            data: deleteAbility
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
    createListAbilityService, 
    deleteListAbilityService 
}