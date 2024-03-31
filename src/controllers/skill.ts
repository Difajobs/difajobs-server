import { Request, Response, NextFunction } from "express";
import { createnewJobSeekerSkillService, deleteJobSeekerSkillService, getAllSkillService, getJobSeekerSkillListService } from "../services/skillService";
import { getToken, loggedUser } from "../utils/decodedToken";

const getAllSkill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getAllSkillService()
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

const getJobSeekerSkillList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = getToken(req)
        const { userId } = loggedUser(token)
        const result = await getJobSeekerSkillListService(userId)
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

const createNewJobSeekerSkill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = getToken(req)
        const { userId } = loggedUser(token)
        const { name } = req.body;
        const result = await createnewJobSeekerSkillService(userId, name);
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

const deleteJobSeekerSkill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = getToken(req)
        const { userId } = loggedUser(token)
        const jobSeekerSkillId = parseInt(req.params.jobSeekerSkillId)
        const result = await deleteJobSeekerSkillService(userId, jobSeekerSkillId)
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

export { getAllSkill, getJobSeekerSkillList, createNewJobSeekerSkill, deleteJobSeekerSkill }