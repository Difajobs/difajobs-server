import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const postCreateListAbility = async (job_id: number, ability_ids: number[]) => {
    try {
        const listAbility = await Promise.all(ability_ids.map(async (abilityId) => {
            const createdRecord = await prisma.list_ability.create({
                data: {
                    job_id: job_id,
                    ability_id: abilityId
                }
            });
            // Fetch ability name
            const ability = await prisma.ability.findUnique({
                where: {
                    id: abilityId
                }
            });
            return {
                id: createdRecord.id,
                job_id: job_id,
                ability_id: abilityId,
                name: ability ? ability.name : null
            };
        }));

        return listAbility;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const deleteListAbility = async (listAbilityId: number) => {
    try {
        const ability = await prisma.list_ability.delete({
            where: {id: listAbilityId}
        })
        return ability
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const getListAbility = async (listAbilityId: number) => {
    try {
        const ability = await prisma.list_ability.findUnique({
            where: {id: listAbilityId}
        })
        return ability
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

export { postCreateListAbility, deleteListAbility, getListAbility };