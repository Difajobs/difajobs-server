import express from "express";
import {
  jobSeekerRegister,
  recruiterRegister,
  userLogin,
} from "../../../controllers/auth";
import {
  sendTokenLink,
  verifyTokenLink,
} from "../../../controllers/verification";
import cors from "cors";

const authRouter = express.Router();

authRouter.post("/jobseeker-register", jobSeekerRegister);
authRouter.post("/recruiter-register", recruiterRegister);
authRouter.post("/login", userLogin);
authRouter.post("/token-send", sendTokenLink);
authRouter.get("/token-verify", cors({ origin: "*" }), verifyTokenLink);

export default authRouter;
