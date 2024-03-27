import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getCompanyJobsList = async (companyId: number) => {
    try {
        const companyJobsList = await prisma.jobs.findMany({
            where: {company_id: companyId},
            include: { 
                company : {
                    select: {
                        name: true,
                        city: true,
                        logo: true
                    }
                },
                list_ability: {
                    select: {
                        ability: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                required_skills: {
                    select: {
                        skills: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        return companyJobsList
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

export { getCompanyJobsList }