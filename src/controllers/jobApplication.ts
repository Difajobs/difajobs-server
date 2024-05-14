import { Request, Response, NextFunction } from "express";
import {
  createJobApplicationService,
  getAllJobApplicationByCompanyAndStatusService,
  getAllJobApplicationByCompanyService,
  getAllJobApplicationByJobSeekerAndStatusService,
  getAllJobApplicationByJobSeekerService,
  getJobApplicationsByJobIdService,
  getOneJobApplicationByCompanyService,
  getOneJobApplicationByJobSeekerService,
  updateOneJobApplicationService,
} from "../services/jobApplicationService";
import { getToken, loggedUser } from "../utils/decodedToken";

const getJobApplicationsByJobId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const jobId = parseInt(req.params.jobId);
    const result = await getJobApplicationsByJobIdService(userId, jobId);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAllJobApplicationByCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const result = await getAllJobApplicationByCompanyService(userId);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getOneJobApplicationByCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const jobApplicationId = parseInt(req.params.jobApplicationId);
    const result = await getOneJobApplicationByCompanyService(jobApplicationId, userId);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAllJobApplicationByCompanyAndStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const status = req.params.status;
    const result = await getAllJobApplicationByCompanyAndStatusService(userId, status);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateOneJobApplicationStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const jobApplicationId = parseInt(req.params.jobApplicationId);
    const { status } = req.body;
    const result = await updateOneJobApplicationService(jobApplicationId, userId, status);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const createJobApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jobId = parseInt(req.params.jobId);
    const token = getToken(req);
    const { cover_letter, answer_1, answer_2, answer_3 } = req.body;
    const result = await createJobApplicationService(token, jobId, cover_letter, answer_1, answer_2, answer_3);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAllJobApplicationByJobSeeker = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const result = await getAllJobApplicationByJobSeekerService(userId);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getOneJobApplicationByJobSeeker = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const jobApplicationId = parseInt(req.params.jobApplicationId);
    const result = await getOneJobApplicationByJobSeekerService(jobApplicationId, userId);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAllJobApplicationByJobSeekerAndStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = loggedUser(req.user!);
    const status = req.params.status;
    const result = await getAllJobApplicationByJobSeekerAndStatusService(userId, status);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

export {
  getJobApplicationsByJobId,
  getAllJobApplicationByCompany,
  getOneJobApplicationByCompany,
  getAllJobApplicationByCompanyAndStatus,
  updateOneJobApplicationStatus,
  createJobApplication,
  getAllJobApplicationByJobSeeker,
  getOneJobApplicationByJobSeeker,
  getAllJobApplicationByJobSeekerAndStatus,
};
