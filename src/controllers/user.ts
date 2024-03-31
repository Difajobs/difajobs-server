import { Request, Response, NextFunction } from 'express';
import { getJobSeekerProfileService, updateJobSeekerDataService } from '../services/userService';
import { JwtPayload } from 'jsonwebtoken';

const getJobSeekerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as JwtPayload).user;
    console.log("test", user)
    const result = await getJobSeekerProfileService(user.id);
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
      const user = (req as JwtPayload).user;
      console.log("test", user)
      const updateData = req.body;
      const result = await updateJobSeekerDataService(user.id, updateData);
      
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