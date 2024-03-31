import { Request, Response, NextFunction } from 'express';
import { getToken } from '../utils/decodedToken';

const auth = () => {
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

const authentication = auth()

export default authentication