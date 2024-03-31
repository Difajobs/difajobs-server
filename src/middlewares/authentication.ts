import { Request, Response, NextFunction } from 'express';
import { getToken } from '../utils/decodedToken';
import JWT_TOKEN from '../config/jwt/jwt';
import { JwtPayload } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken'

const auth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const decodedToken = (getToken(req))?.toString();
        if (!decodedToken) {
            return res.status(401).send({ message: "Unauthorized, please login" });
        }
        try {
            req.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).send({ message: "Invalid Access" });
        }
    };
};

const authentication = auth()

export default authentication