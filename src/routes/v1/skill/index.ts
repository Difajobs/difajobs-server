import express from 'express'
import { createNewJobSeekerSkill, deleteJobSeekerSkill } from '../../../controllers/skill'

const skillRouter = express.Router()

skillRouter.post('/', createNewJobSeekerSkill)
skillRouter.delete('/:jobSeekerSkillId', deleteJobSeekerSkill)

export default skillRouter