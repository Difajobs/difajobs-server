import { prisma } from "../config/db/dbConnection";

export const getAllCompaniesDao = async () => {
    try {
        const companies = await prisma.company.findMany({
        include: {
            user: true,
        },
        });
        return companies;
    } catch (error) {
        throw error;
    }
};
