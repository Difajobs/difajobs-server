import { getOneCompanyByUserId } from '../dao/companyDao';
import { getAllJobApplicationByCompany, getAllJobApplicationByCompanyAndStatus, getJobApplicationsByJobId, getOneJobApplicationByCompany } from '../dao/jobApplicationDao';
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

const getOneJobApplicationByCompanyService = async (jobApplicationId: number, userId: number) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }
        
        const jobApplication = await getOneJobApplicationByCompany(jobApplicationId, company.id)
        if (!jobApplication) {
            throw new ErrorHandler({
                success: false,
                message: "Job Application Not Found...",
                status: 404
            })
        }

        return {
            success: true,
            message: "Successfully Fetch Job Application",
            data: jobApplication
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

const getAllJobApplicationByCompanyAndStatusService = async (userId: number, status: string) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }
        const statusEnum = ["ongoing", "reviewing", "interview", "reject", "hired"]

        if (!statusEnum.includes(status)) {
            throw new ErrorHandler({
                success: false,
                message: "Invalid Status Provided...",
                status: 404
            })
        }

        const jobApplications = await getAllJobApplicationByCompanyAndStatus(company.id, status)

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

export { getJobApplicationsByJobIdService, getAllJobApplicationByCompanyService, getOneJobApplicationByCompanyService, getAllJobApplicationByCompanyAndStatusService }