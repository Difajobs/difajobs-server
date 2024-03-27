import { Request, Response, NextFunction } from 'express';
import { userJobSeekerRegisterService, userRecruiterRegisterService } from '../services/authService';

//------ Create Jobseeker ------
const jobSeekerRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, role, fullname, dob, gender, phone_number, city, disability_id } = req.body;
        const result = await userJobSeekerRegisterService({ email, password, role, fullname, dob, gender, phone_number, city }, disability_id)
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

//------ Create Recruiter ------
const recruiterRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, role, name, city, about, logo, picture } = req.body;
        const result = await userRecruiterRegisterService({ email, password, role, name, city, about, logo, picture })
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

export { jobSeekerRegister, recruiterRegister }