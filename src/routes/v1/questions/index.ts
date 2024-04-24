import express from 'express'
import { recruiterAuth } from '../../../middlewares/authorization'
import { editQuestions } from '../../../controllers/question'

const questionsRouter = express.Router()

questionsRouter.patch('/:jobId', recruiterAuth, editQuestions)

export default questionsRouter