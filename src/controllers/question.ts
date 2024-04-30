import { Request, Response, NextFunction } from 'express';
import { loggedUser } from '../utils/decodedToken';
import { editQuestionsService } from '../services/questionService';

const editQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const  jobId = parseInt(req.params.jobId)
        const updateData: QuestionsUpdate = req.body
        const result = await editQuestionsService(userId, jobId, updateData)
        if (result.success) {
          res.status(200).json({
            success: true,
            message: result.message,
            data: result.data
          })
        }
    } catch (error) {
        next(error)
    }
}

export { editQuestions }