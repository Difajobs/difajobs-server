import { Request, Response } from 'express';
import * as companyService from '../services/companyService';

export const getAllCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await companyService.getCompanyProfiles();
        res.json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
