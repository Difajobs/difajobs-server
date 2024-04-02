import { updateCompanyProfileService /* other imports */ } from '../services/companyService';
import { JwtPayload } from 'jsonwebtoken';
import { getToken, loggedUser } from '../utils/decodedToken';
import { Request, Response, NextFunction } from 'express';


const patchCompanyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!);
        const updateData = req.body;
        const result = await updateCompanyProfileService(userId, updateData);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

export { patchCompanyProfile };