import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getOneCompany = async (companyId: number) => {
    try {
        const company = await prisma.company.findUnique({
            where: {id: companyId}
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

const updateCompanyProfile = async (userId: number, updateData: any) => {
    try {
        const updatedCompany = await prisma.company.updateMany({
            where: {
                user_id: userId,
            },
            data: updateData,
        });
        return updatedCompany;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    }
};

export { getOneCompany, updateCompanyProfile }