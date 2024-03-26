import ErrorHandler from '../utils/errorHandler';
import { getEmail, getOneJobSeeker, postCreateJobSeeker, postCreateRecruiter, updateJobSeekerData } from '../dao/userDao';
import bcryptjs from "bcryptjs";
import { getJobSeekerDisabilityList, postCreateListDisability } from '../dao/disabilityDao';
import { getJobSeekerSkillList } from '../dao/skillsDao';
import { getJobSeekerCertificateList } from '../dao/certificateDao';

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

const getJobSeekerProfileService = async (userId: number) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)

        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker not found',
                status: 404
            });
        }
        const jobSeekerDisabilityList = await getJobSeekerDisabilityList(jobSeeker.id)
        if (!jobSeekerDisabilityList) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker disability list not found',
                status: 404
            });
        }
        const jobSeekerSkillList = await getJobSeekerSkillList(jobSeeker.id)
        const jobSeekerCertificateList = await getJobSeekerCertificateList(jobSeeker.id)
        return {
            success: true,
            message: "Successfully fetch Job Seeker Profile.",
            data: { jobSeeker, jobSeekerDisabilityList, jobSeekerSkillList, jobSeekerCertificateList }
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

const updateJobSeekerDataService = async (userId: number, updateData: any) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId);
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        }

        const filteredUpdateData: any = {};
        for (const key in updateData) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }

        const updatedPersonalData = await updateJobSeekerData(jobSeeker.id, filteredUpdateData);

        return {
            success: true,
            message: "Successfully Update Job Seeker Personal Data:",
            data: { updatedPersonalData }
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

export { userJobSeekerRegisterService, getJobSeekerProfileService, updateJobSeekerDataService, userRecruiterRegisterService }
