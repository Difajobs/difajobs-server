import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";
import { format, formatISO } from 'date-fns';

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

const postCreateUser = async (firstName: string, lastName: string, email: string, password: string, dob: Date, gender: string) => {
    try {
        const formattedDob = formatISO(dob);
        console.log('Formatted Date of Birth:', formattedDob);
        const newUser = await prisma.user.create({
            data: { 
                first_name: firstName, 
                last_name: lastName, 
                email: email, 
                password: password, 
                dob: formattedDob, 
                gender: gender 
            }
        });

        return newUser;
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


const postCreateListDisability = async (userId: number, disabilityIds : number[])=> {
    try {
        const listDisability = await Promise.all(disabilityIds.map(async (disabilityId) => {
            const createdRecord = await prisma.list_disability.create({
                data: {
                    user_id: userId,
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