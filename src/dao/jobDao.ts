import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getCompanyId = async (userId : number) => {
    try {
        const company = await prisma.company.findFirst({
            where: { user_id: userId }
        })
        return company
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const postJob = async (company_id: number, userData: JobCreate) => {
    const { title, description, gender, employment_type, min_salary, max_salary } = userData
    try {
        const newJob = await prisma.jobs.create({
            data: {
                company_id: company_id,
                title: title,
                description: description,
                gender: gender,
                employment_type: employment_type,
                min_salary: min_salary,
                max_salary: max_salary
            }
        })
        return newJob
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

export { getCompanyId, postJob }