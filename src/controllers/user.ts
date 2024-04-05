import { Request, Response, NextFunction } from 'express';
import { getJobSeekerProfileService, updateJobSeekerDataService } from '../services/userService';
import { loggedUser } from '../utils/decodedToken';

const getJobSeekerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!)
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
      const { userId } = loggedUser(req.user!)
      const updateData: JobSeekerDataUpdate = req.body;
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