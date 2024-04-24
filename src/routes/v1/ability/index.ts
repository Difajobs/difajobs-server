import express from "express";
import { recruiterAuth } from "../../../middlewares/authorization";
import { createListAbility, deleteListAbility } from "../../../controllers/ability";

const abilityRouter = express.Router()

abilityRouter.post('/:jobId', recruiterAuth, createListAbility)
abilityRouter.delete('/:listAbilityId', recruiterAuth, deleteListAbility)

export default abilityRouter