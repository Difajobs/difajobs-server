import express from 'express';
import { getJobSeekerProfile, updateJobSeekerProfile } from '../../../controllers/user';
// import { deleteUser } from '../../../controllers/user';


const userRouter = express.Router()

userRouter.get('/', getJobSeekerProfile)
userRouter.patch('/', updateJobSeekerProfile)
// userRouter.delete('/deleteaccount', authenticationMiddleware, deleteUser)

export default userRouter;