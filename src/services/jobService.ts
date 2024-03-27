import { postCreateListAbility } from '../dao/abilityDao';
import { getCompanyId, postJob } from '../dao/jobDao';
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

export { createJobService }