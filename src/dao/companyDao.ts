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

export { getOneCompany }