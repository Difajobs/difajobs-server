import { getAllCompany, getOneCompany, getOneCompanyByUserId, updateCompanyData } from "../dao/companyDao";
import ErrorHandler from "../utils/errorHandler";

const getCompanyProfileService = async (companyId: number) => {
    try {
        const company = await getOneCompany(companyId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }
        return {
            success: true,
            message: "Successfully Fetch Company Profile:",
            data: {
                ...company,
                jobs: company.jobs.map(job => ({
                    ...job,
                    min_salary: job.min_salary?.toString(),
                    max_salary: job.max_salary?.toString(),
                    list_ability: job.list_ability.map(ability => ability.ability?.name),
                    required_skills: job.required_skills.map(skill => skill.skills.name)
                }))
            }
        };
    
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message
        })
    }
}

const getAllCompanyService = async () => {
    try {
        const companyList = await getAllCompany()
    
        return {
            success: true,
            message: "Successfully Fetch List of Company:",
            data: companyList
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message
        })
    }
}

const updateCompanyDataService = async (userId: number, updateData: CompanyDataUpdate) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }

        const updatedData = await updateCompanyData(company.id, updateData);
        return {
            success: true,
            message: "Successfully Update Company's Information:",
            data: updatedData
        }

    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message
        })
    }
}

export { getCompanyProfileService, getAllCompanyService, updateCompanyDataService }