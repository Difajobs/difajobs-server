import express from 'express';
import { getJobSeekerProfile, updateJobSeekerData } from '../../../controllers/user';
import { jobSeekerAuth } from '../../../middlewares/authorization';
// import { deleteUser } from '../../../controllers/user';

const userRouter = express.Router()

userRouter.get('/', jobSeekerAuth, getJobSeekerProfile)
userRouter.patch('/personal', jobSeekerAuth, updateJobSeekerData)
// userRouter.delete('/deleteaccount', authenticationMiddleware, deleteUser)

export default userRouter;