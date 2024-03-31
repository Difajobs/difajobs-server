import { Request, Response, NextFunction } from 'express';
import { getJobSeekerProfileService, updateJobSeekerDataService } from '../services/userService';
import { JwtPayload } from 'jsonwebtoken';
import { getToken, loggedUser } from '../utils/decodedToken';

const getJobSeekerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = getToken(req)
    const { userId } = loggedUser(token)
    const result = await getJobSeekerProfileService(userId);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data
      })
    }
  } catch (error) {
    next(error);
  }
};

const updateJobSeekerData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = getToken(req)
    const { userId } = loggedUser(token)
      const updateData = req.body;
      const result = await updateJobSeekerDataService(userId, updateData);
      
      if (result.success) {
        res.status(200).json({
          success: true,
          message: result.message,
          data: result.data
        })
      }
  } catch (error) {
      next(error);
  }
}

export { getJobSeekerProfile, updateJobSeekerData }