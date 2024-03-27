import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { createnewJobSeekerSkillService, deleteJobSeekerSkillService } from "../services/skillService";

const createNewJobSeekerSkill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as JwtPayload).user;
        const { name } = req.body;
        const result = await createnewJobSeekerSkillService(user.id, name);
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
        const user = (req as JwtPayload).user;
        const jobSeekerSkillId = parseInt(req.params.jobSeekerSkillId)
        const result = await deleteJobSeekerSkillService(user.id, jobSeekerSkillId)
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

export { createNewJobSeekerSkill, deleteJobSeekerSkill }