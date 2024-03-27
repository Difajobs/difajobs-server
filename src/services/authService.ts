import ErrorHandler from '../utils/errorHandler';
import { getEmail, postCreateJobSeeker, postCreateRecruiter } from '../dao/userDao';
import bcryptjs from "bcryptjs";
import { postCreateListDisability } from '../dao/disabilityDao';
import * as jwt from "jsonwebtoken"
import JWT_TOKEN from '../config/jwt/jwt';

// ------ Register by Email ------

// jobseeker registration
const userJobSeekerRegisterService = async (userData: JobSeekerRegistrationData, disabilityId: number[]) => {
    const { email, password, role } = userData;
    if (!email) {
        throw new ErrorHandler({
            success: false,
            message: 'Email cannot be empty',
            status: 400
        })
    }
    if (password.length < 6) {
        throw new ErrorHandler({
            success: false,
            message: 'Password must be at least 6 characters long',
            status: 400
        })
    }
    if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
        throw new ErrorHandler({
            success: false,
            message: 'Password must contain both alphabetic and numeric characters',
            status: 400
        })
    }
    if (role !== "job seeker" && role !== "recruiter") {
        throw new ErrorHandler({
            success: false,
            message: 'only "job seeker" or "recruiter" allowed for user role',
            status: 400
        })
    }
    try {
        const userEmail = await getEmail(email)
        if (userEmail) {
            throw new ErrorHandler({
                success: false,
                message: 'Email already registered, please use other Email',
                status: 409,
            });
        }
        const user = await postCreateJobSeeker(userData)
        const disability = await postCreateListDisability(user.newJobSeeker.id, disabilityId)
        return {
            success: true,
            message: "User registered successfully",
            data: { user, disability }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    };
};

// recruiter registration
const userRecruiterRegisterService = async (userData: RecruiterRegistrationData) => {
    const { email, password, role } = userData;
    if (!email) {
        throw new ErrorHandler({
            success: false,
            message: 'Email cannot be empty',
            status: 400
        })
    }
    if (password.length < 6) {
        throw new ErrorHandler({
            success: false,
            message: 'Password must be at least 6 characters long',
            status: 400
        })
    }
    if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
        throw new ErrorHandler({
            success: false,
            message: 'Password must contain both alphabetic and numeric characters',
            status: 400
        })
    }
    if (role !== "job seeker" && role !== "recruiter") {
        throw new ErrorHandler({
            success: false,
            message: "only 'job seeker' or 'recruiter' allowed for user role",
            status: 400
        })
    }
    try {
        const userEmail = await getEmail(email)
        if (userEmail) {
            throw new ErrorHandler({
                success: false,
                message: 'Email already registered, please use other Email',
                status: 409,
            });
        }
        const createRecuiter = await postCreateRecruiter(userData)
        return {
            success: true,
            message: "User registered successfully",
            data: createRecuiter
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    };
};

// ------ login ------
const userLoginService = async (email: string, password: string) => {
    if (!email) {
        throw new ErrorHandler({
            success: false,
            message: 'Email cannot be empty',
            status: 400
        })
    }
    try {
        const user = await getEmail(email)
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'Email or Password invalid',
                status: 401
            })
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if (!isPasswordValid) {
            throw new ErrorHandler({
                success: false,
                message: 'Email or Password invalid',
                status: 401
            })
        }
        const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              role: user.role,
            },
            JWT_TOKEN!
          );
        return {
            success: true,
            message: "Successfully logged in",
            token: token
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

// ------ Register by Google service ------
// const registerUserbyGoogleService = async (fullname: string, email: string) => {
//     try {
//         const createUser = await postCreateUserGoogle(fullname, email)
//         const newUser = {
//             success: true,
//             message: "User registered successfully",
//             data: createUser
//         };
//         return newUser;
//     } catch (error: any) {
//         console.error(error);
//         throw new ErrorHandler({
//             success: false,
//             status: error.status,
//             message: error.message,
//         });
//     }
// }

export { userJobSeekerRegisterService, userRecruiterRegisterService, userLoginService }