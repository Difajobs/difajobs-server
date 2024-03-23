import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";


const postListDisability = async (categoryIds: number[]) => {
    try {
        const listDisability = await Promise.all(categoryIds.map(async (categoryId) => {
            const createdRecord = await prisma.disability.findMany({
                where: {
                    category_id: categoryId
                }
            });
            return createdRecord
        }));

        return listDisability
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

export { postListDisability }