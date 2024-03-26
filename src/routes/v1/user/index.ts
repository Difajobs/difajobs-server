import express from 'express';
import { getJobSeekerProfile, updateJobSeekerData } from '../../../controllers/user';
// import { deleteUser } from '../../../controllers/user';


const userRouter = express.Router()

userRouter.get('/', getJobSeekerProfile)
userRouter.patch('/personal-data', updateJobSeekerData)
// userRouter.delete('/deleteaccount', authenticationMiddleware, deleteUser)

export default userRouter;