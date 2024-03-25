import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";
import { formatISO } from 'date-fns';
import bcryptjs from "bcryptjs";

const getEmail = async (email : string )=> {
    try {
        await prisma.user.findUnique({
            where: { email }
        });
        const user = await prisma.user.findUnique({
            where: {email: email}
        })
        return user?.id
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const postCreateJobSeeker = async (userData: JobSeekerRegistrationData) => {
    try {
        const {email, password, role, fullname, dob, gender, phone_number, city} = userData
        const formattedDob = formatISO(dob);
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email: email, 
                password: hashedPassword,
                role: role
            }
        });
        const newJobSeeker = await prisma.job_seeker.create({
            data: {
                user_id: newUser.id,
                fullname: fullname, 
                dob: formattedDob,
                gender: gender,
                phone_number: phone_number,
                city: city
            }
        });
        return { newUser, newJobSeeker };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const postCreateRecruiter = async (userData: RecruiterRegistrationData) => {
    try {
        const { email, password, role, name, city, about, logo, picture } = userData
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await prisma.user.create({
            data:{
                email: email,
                password: hashedPassword,
                role: role,
            }
        })
        const newCompany = await prisma.company.create({
            data: {
                user_id: newUser.id,
                name: name,
                city: city,
                about: about,
                logo: logo,
                picture:picture
            }
        })
        return{ newUser, newCompany}
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getOneUser = async (userId: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {id: userId}
        })
        return user
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getOneJobSeeker = async (userId: number) => {
    try {
        const jobSeeker = await prisma.job_seeker.findFirst({
            where: {user_id: userId}
        })
        return jobSeeker
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getJobSeekerDisabilityList = async (jobSeekerId: number) => {
    try {
        const jobSeekerDisabilityList = await prisma.list_disability.findMany({
            where: {job_seeker_id: jobSeekerId}
        })
        return jobSeekerDisabilityList
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getJobSeekerSkillList = async (jobSeekerId: number) => {
    try {
        const jobSeeker = await prisma.list_skills.findMany({
            where: {job_seeker_id: jobSeekerId}
        })
        return jobSeeker
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getJobSeekerCertificateList = async (jobSeekerId: number) => {
    try {
        const jobSeeker = await prisma.list_certificate.findMany({
            where: {job_seeker_id: jobSeekerId}
        })
        return jobSeeker
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const updateJobSeekerData = async (jobSeekerId: number, data: any) => {
    try {
        const updateJobSeeker = await prisma.job_seeker.update({
            where: {id: jobSeekerId},
            data
        });
        return updateJobSeeker;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

// const postCreateUserGoogle = async (fullname: string, email : string)=> {
//     try {
//         await prisma.user.create({
//             data: {fullname: fullname, email: email }
//         })
//         const user = await prisma.user.findUnique({
//             where:{email: email} 
//         })

//         return {
//             userId: user?.id
//         }
//     } catch (error: any) {
//         console.error(error);
//         throw new ErrorHandler({
//             success: false,
//             status: error.status,
//             message: error.message,
//         });
//     } finally {
//         await disconnectDB();
//     }
// }


export { getEmail, postCreateJobSeeker, getOneUser, getOneJobSeeker, getJobSeekerSkillList, getJobSeekerDisabilityList, getJobSeekerCertificateList, updateJobSeekerData, postCreateRecruiter }