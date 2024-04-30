import express from "express";
import { recruiterAuth } from "../../../middlewares/authorization";
import { createListAbility, deleteListAbility } from "../../../controllers/listAbility";

const listAbilityRouter = express.Router()

listAbilityRouter.post('/:jobId', recruiterAuth, createListAbility)
listAbilityRouter.delete('/:listAbilityId', recruiterAuth, deleteListAbility)

export default listAbilityRouter