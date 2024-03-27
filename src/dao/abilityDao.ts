import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const postCreateListAbility = async (job_id: number, ability_ids : number[])=> {
    try {
        const listAbility = await Promise.all(ability_ids.map(async (abilityId) => {
            const createdRecord = await prisma.list_ability.create({
                data: {
                    job_id: job_id,
                    ability_id: abilityId
                }
            });
            return createdRecord
        }));

        return listAbility
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

export { postCreateListAbility }