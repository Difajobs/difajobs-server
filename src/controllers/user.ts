import { Request, Response, NextFunction } from 'express';
import { getUserProfileService, updateUserProfileService, userJobSeekerRegisterService } from '../services/userService';
import { JwtPayload } from 'jsonwebtoken';

//------ Create user ------
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, role, fullname, dob, gender, phone_number, city, disability_id } = req.body;
    const result = await userJobSeekerRegisterService({email, password, role, fullname, dob, gender, phone_number, city}, disability_id)
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
};


//------ Login by phone ------
// const userLogin = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { phone_number, password } = req.body;
//     const result = await loginUserService({phone_number, password});
//     if (result.success) {
//       const oneWeekInSeconds = 7 * 24 * 3600;
//       res.cookie("access_token", result.data.accessToken, {
//         maxAge: oneWeekInSeconds * 1000,
//         httpOnly: true,
//         secure: true,
//         sameSite: 'none',
//         path: '/',
//       });
//       return res.status(200).json({
//         success: true,
//         message: result.message,
//         expired_cookies: result.data.expiredToken,
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req.user as JwtPayload).id;
    const result = await getUserProfileService(userId);
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
};

const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const userId = (req.user as JwtPayload).id;
      const updateData = req.body;
      const result = await updateUserProfileService(userId, updateData);
      
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

export { userRegister, getUserProfile, updateUserProfile }
