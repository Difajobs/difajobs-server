import express from 'express'
import { createNewJobSeekerSkill, createRequiredSkill, deleteJobSeekerSkill, deleteRequiredSkill, getAllSkill, getJobSeekerSkillList } from '../../../controllers/skill'
import { jobSeekerAuth, recruiterAuth } from '../../../middlewares/authorization'

const skillRouter = express.Router()

skillRouter.get('/', getJobSeekerSkillList)
skillRouter.get('/all', getAllSkill)
skillRouter.post('/', jobSeekerAuth, createNewJobSeekerSkill)
skillRouter.delete('/:jobSeekerSkillId', jobSeekerAuth, deleteJobSeekerSkill)

skillRouter.post('/required-skill/:jobId', recruiterAuth, createRequiredSkill)
skillRouter.delete('/required-skill/:requiredSkillId', recruiterAuth, deleteRequiredSkill)

export default skillRouter