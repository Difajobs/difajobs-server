import { Request, Response, NextFunction } from 'express';
import { getJobSeekerProfileService, updateJobSeekerDataService } from '../services/userService';
import { JwtPayload } from 'jsonwebtoken';

const getJobSeekerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req.user as JwtPayload).id;
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
      const userId = (req.user as JwtPayload).id;
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