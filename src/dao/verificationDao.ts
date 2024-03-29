import { disconnectDB, prisma } from "../config/db/dbConnection";
//import ErrorHandler from "../utils/errorHandler";

const updateVerifyStatus = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {email: email}
        }); 

    if(!user){
        console.error('User not found');
        return
    }

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            is_verified: true,
        },
    });

    console.log('User verified:', email);
    } catch (error) {
        console.error('Error updating user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

export { updateVerifyStatus }