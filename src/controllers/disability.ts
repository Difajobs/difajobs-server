import { Request, Response, NextFunction } from 'express';
import { disabiltyListService } from '../services/disabilityService';

//------ Get disability list ------
const disabilityList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category_id } = req.body;
    const result = await disabiltyListService(category_id)
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

export { disabilityList }