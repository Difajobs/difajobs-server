import ErrorHandler from '../utils/errorHandler';
import { getEmail, getOneUser, getUserCertificateList, getUserDisabilityList, getUserSkillList, postCreateListDisability, postCreateUser, updateUser } from '../dao/userDao';
import bcryptjs from "bcryptjs";

// ------ Register by Email ------
const userJobSeekerRegisterService = async (userData: UserRegistrationData, disabilityId: number[]) => {
    try {
        const { email, password, role } = userData;

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
        if (role !== "job seeker" || "recruiter") {
            throw new ErrorHandler({
                success: false,
                message: 'only "job seeker" or "recruiter" allowed for user role',
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
        const createUser = await postCreateUser(userData)
        const disability = await postCreateListDisability(createUser.newJobSeeker.id, disabilityId)
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
    };
};

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
        const userData = await getOneUser(userId)

        if (!userData) {
            throw new ErrorHandler({
                success: false,
                message: 'User not found',
                status: 404
            });
        }
        const userDisabilityList = await getUserDisabilityList(userId)
        if (!userDisabilityList) {
            throw new ErrorHandler({
                success: false,
                message: 'User disability list not found',
                status: 404
            });
        }
        const userSkillList = await getUserSkillList(userId)
        const userCertificateList = await getUserCertificateList(userId)
        return {
            success: true,
            message: "Successfully fetch User Profile.",
                data: {userData, userDisabilityList, userSkillList, userCertificateList}
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

        const updatedUserProfile = await updateUser(userId, filteredUpdateData);
        
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

export { userJobSeekerRegisterService, getUserProfileService, updateUserProfileService }
