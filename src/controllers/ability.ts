import { Request, Response, NextFunction } from "express";
import { loggedUser } from "../utils/decodedToken";
import { createListAbilityService, deleteListAbilityService } from "../services/abilityService";

const createListAbility = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const jobId = parseInt(req.params.jobId)
        const { ability_id } = req.body
        const result = await createListAbilityService(userId, jobId, ability_id)
        if (result.success) {
            res.status(200).json({
                success: true,
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)   
    }
}

const deleteListAbility = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = loggedUser(req.user!)
        const listAbilityId = parseInt(req.params.listAbilityId)
        const result = await deleteListAbilityService(userId, listAbilityId)
        if (result.success) {
            res.status(200).json({
                success: true,
                message: result.message,
                data: result.data
            })
        }
    } catch (error) {
        next(error)   
    }
}

export { createListAbility, deleteListAbility }