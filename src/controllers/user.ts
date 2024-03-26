import { Request, Response, NextFunction } from 'express';
import { getJobSeekerProfileService, updateJobSeekerDataService, userJobSeekerRegisterService, userRecruiterRegisterService } from '../services/userService';
import { JwtPayload } from 'jsonwebtoken';

//------ Create user ------
const jobSeekerRegister = async (req: Request, res: Response, next: NextFunction) => {
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

const recruiterRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, role, name, city, about, logo, picture } = req.body;
    const result = await userRecruiterRegisterService({email, password, role, name, city, about, logo, picture})
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

const getJobSeekerProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req.user as JwtPayload).id;
    const result = await getJobSeekerProfileService(userId);
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

const updateJobSeekerData = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const userId = (req.user as JwtPayload).id;
      const updateData = req.body;
      const result = await updateJobSeekerDataService(userId, updateData);
      
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

export { jobSeekerRegister, recruiterRegister, getJobSeekerProfile, updateJobSeekerData }
