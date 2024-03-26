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

const postCreateListDisability = async (jobSeekerId: number, disabilityIds : number[])=> {
    try {
        const listDisability = await Promise.all(disabilityIds.map(async (disabilityId) => {
            const createdRecord = await prisma.list_disability.create({
                data: {
                    job_seeker_id: jobSeekerId,
                    disability_id: disabilityId
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

const getJobSeekerDisabilityList = async (jobSeekerId: number) => {
    try {
        const jobSeekerDisabilityList = await prisma.list_disability.findMany({
            where: {job_seeker_id: jobSeekerId},
            include: { disability: true }
        })
        return jobSeekerDisabilityList
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

export { postListDisability, postCreateListDisability, getJobSeekerDisabilityList }