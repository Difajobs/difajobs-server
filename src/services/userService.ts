import ErrorHandler from '../utils/errorHandler';
import { getEmail, getOneUser, postCreateListDisability, postCreateUser, updateUserProfile } from '../dao/userDao';
import bcryptjs from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { add } from "date-fns";
import JWT_TOKEN from '../config/jwt/jwt';

// ------ Register by Email service ------
const userRegistrationService = async (firstName: string, lastName: string, email: string, password: string, dob: Date, gender: string, disabilityId: number[]) => {
    try {
        if(!email) {
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
        const userPhone = await getEmail(email)
        if (userPhone) {
            throw new ErrorHandler({
                success: false,
                message: 'Email already registered, please use other Email',
                status: 409,
            });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const createUser = await postCreateUser(firstName, lastName, email, hashedPassword, dob, gender)
        const disability = await postCreateListDisability(createUser.id, disabilityId)
        return {
            success: true,
            message: "User registered successfully",
                data: {createUser, disability}
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

const getUserProfileService = async (userId: number) => {
    try {
        const userProfile = await getOneUser(userId)

        if (!userProfile) {
            throw new ErrorHandler({
                success: false,
                message: 'User not found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully fetch User Profile.",
                data: {userProfile}
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

const updateUserProfileService = async (userId: number, updateData: any) => {
    try {
        const user = await getOneUser(userId);
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'User Not Found.. Please login',
                status: 404
            });
        }

        const filteredUpdateData: any = {};
        for (const key in updateData) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }

        const updatedUserProfile = await updateUserProfile(userId, filteredUpdateData);
        
        return {
            success: true,
            message: "Successfully Update User Profile.",
                data: {updatedUserProfile}
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

export { userRegistrationService, getUserProfileService, updateUserProfileService }
