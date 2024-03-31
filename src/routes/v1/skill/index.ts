import express from 'express'
import { createNewJobSeekerSkill, deleteJobSeekerSkill, getAllSkill, getJobSeekerSkillList } from '../../../controllers/skill'

const skillRouter = express.Router()

skillRouter.get('/', getJobSeekerSkillList)
skillRouter.get('/all', getAllSkill)
skillRouter.post('/', createNewJobSeekerSkill)
skillRouter.delete('/:jobSeekerSkillId', deleteJobSeekerSkill)

export default skillRouter