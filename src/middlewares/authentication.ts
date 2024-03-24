import { Request, Response, NextFunction } from 'express';
import { getToken } from '../utils/decodedToken';

const authentication = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const decodedToken = getToken(req)
        try {
            if (!decodedToken) {
                return res.status(401).send({ message: "Unauthorized, please login" });
            }
            next();
        } catch (error) {
            res.status(401).send({ message: "Invalid Access" });
        }
    };
};

export default authentication