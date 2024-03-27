import { getOneCompany } from '../dao/companyDao';
import { getCompanyJobsList } from '../dao/jobsDao';
import ErrorHandler from '../utils/errorHandler';

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

export { getCompanyJobsListService }