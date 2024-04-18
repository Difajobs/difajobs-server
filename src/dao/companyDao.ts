import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getOneCompany = async (companyId: number) => {
    try {
        const company = await prisma.company.findUnique({
            where: {id: companyId},
            include: {
                user: {
                    select: {
                        email: true,
                    }
                },
                jobs: {
                    include: {
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
                                skills:{
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
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

export const getAllCompany = async () => {
    try {
        const allCompany = await prisma.company.findMany({
            include: {
                user: {
                    select: {
                        email: true,
                    }
                }
            },
        });
        return allCompany;
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
};

export { getOneCompany }