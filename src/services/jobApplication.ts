import { getOneCompany, getOneCompanyByUserId } from '../dao/companyDao';
import { getAllJobApplicationByCompany, getJobApplicationsByJobId } from '../dao/jobApplicationDao';
import ErrorHandler from '../utils/errorHandler';

const getJobApplicationsByJobIdService = async (userId : number, jobId : number) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }
        
        const jobApplications = await getJobApplicationsByJobId(company.id, jobId)

        if (jobApplications.length === 0) {
            throw new ErrorHandler({
                success: false,
                message: "Job Application Not Found...",
                status: 404
            })
        }

        return {
            success: true,
            message: "Successfully Fetch Job Applications",
            data: jobApplications
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

const getAllJobApplicationByCompanyService = async (userId: number) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }

        const jobApplications = await getAllJobApplicationByCompany(company.id)

        if (jobApplications.length === 0) {
            throw new ErrorHandler({
                success: false,
                message: "Job Application Not Found...",
                status: 404
            })
        }

        return {
            success: true,
            message: "Successfully Fetch Job Applications",
            data: jobApplications
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

export { getJobApplicationsByJobIdService, getAllJobApplicationByCompanyService }