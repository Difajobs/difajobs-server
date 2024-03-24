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

const postCreateUser = async (userData: UserRegistrationData) => {
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

const postCreateListDisability = async (jobSeekerId: number, disabilityIds : number[])=> {
    try {
        const listDisability = await Promise.all(disabilityIds.map(async (disabilityId) => {
            const createdRecord = await prisma.list_disability.create({
                data: {
                    job_seeker_id: jobSeekerId,
                    disability_id: disabilityId
                }
            });
            return createdRecord
        }));

        return listDisability
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

<<<<<<< Updated upstream
=======
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

const getUserDisabilityList = async (userId: number) => {
    try {
        const user = await prisma.list_disability.findMany({
            where: {user_id: userId}
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

const getUserSkillList = async (userId: number) => {
    try {
        const user = await prisma.list_skills.findMany({
            where: {user_id: userId}
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

const getUserCertificateList = async (userId: number) => {
    try {
        const user = await prisma.list_certificate.findMany({
            where: {user_id: userId}
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

const updateUser = async (userId: number, data: any) => {
    try {
        const updateUser = await prisma.user.update({
            where: {id: userId},
            data
        });
        return updateUser;
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
>>>>>>> Stashed changes

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


export { getEmail, postCreateUser, postCreateListDisability }