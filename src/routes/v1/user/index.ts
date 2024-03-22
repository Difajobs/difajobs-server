import express from 'express';
import { getUserProfile } from '../../../controllers/user';
// import { getUserProfile, updateUserProfile, deleteUser } from '../../../controllers/user';


const userRouter = express.Router()

userRouter.get('/', getUserProfile)
// userRouter.patch('/', updateUserProfile)
// userRouter.delete('/deleteaccount', authenticationMiddleware, deleteUser)

export default userRouter;