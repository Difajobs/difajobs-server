import { Request, Response, NextFunction} from 'express'
import { getToken, loggedUser } from '../utils/decodedToken';


const authorization = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = getToken(req)
    const { role } = loggedUser(decodedToken);

    if (!decodedToken) {
      return res.status(401).send({ message: "Unauthorized, please login" });
    }

    try {
      
      if (!allowedRoles.includes(role)) {
        return res.status(403).send({ message: "Access forbidden: Role not allowed" });
      }

      next();
    } catch (error) {
      res.status(401).send({ message: "Invalid Access" });
    }
  };
};

const jobSeekerAuth = authorization(["job seeker"]);
const recruiterAuth = authorization(["recruiter"]);

export { jobSeekerAuth, recruiterAuth }