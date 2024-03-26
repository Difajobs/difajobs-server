import * as companyDao from '../dao/companyDao';

export const getCompanyProfiles = async () => {
    try {
        return await companyDao.getAllCompaniesDao();
    } catch (error) {
        throw error;
    }
};
