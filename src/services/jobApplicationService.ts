import { JwtPayload } from "jsonwebtoken";
import { createAnswers } from "../dao/answersDao";
import { getOneCompanyByUserId } from "../dao/companyDao";
import {
  createJobApplication,
  getAllJobApplicationByCompany,
  getAllJobApplicationByCompanyAndStatus,
  getAllJobApplicationByJobSeeker,
  getAllJobApplicationByJobSeekerAndStatus,
  getJobApplicationsByJobId,
  getOneJobApplicationByCompany,
  getOneJobApplicationByJobSeeker,
  updateOneJobApplication,
} from "../dao/jobApplicationDao";
import { getOneJobListing } from "../dao/jobsDao";
import { getOneJobSeeker } from "../dao/userDao";
import ErrorHandler from "../utils/errorHandler";
import { loggedUser } from "../utils/decodedToken";
import { prisma } from "../config/db/dbConnection";

const createJobApplicationService = async (
  token: JwtPayload | null,
  jobId: number,
  coverLetter?: string,
  answer_1?: string,
  answer_2?: string,
  answer_3?: string
) => {
  const { userId } = loggedUser(token);
  try {
    // Perform both lookups concurrently
    const [jobSeeker, job] = await Promise.all([getOneJobSeeker(userId), getOneJobListing(jobId)]);

    if (!jobSeeker?.job_seeker_skills || !jobSeeker.disabilities) {
      throw new ErrorHandler({
        success: false,
        message: "Please Complete Your Profile..!",
        status: 400,
      });
    }

    if (!job) {
      throw new ErrorHandler({
        success: false,
        message: "Job Listing Not Found..",
        status: 404,
      });
    }

    const result = await prisma.$transaction(async prisma => {
      const jobApplication = await prisma.job_application.create({
        data: {
          company_id: job.company_id,
          job_id: jobId,
          job_seeker_id: jobSeeker.id,
          cover_letter: coverLetter,
          status: "pending",
        },
      });

      const jobApplicationAnswers =
        answer_1 || answer_2 || answer_3
          ? await prisma.answers.create({
              data: {
                job_id: jobId,
                job_application_id: jobApplication.id,
                answer_1: answer_1,
                answer_2: answer_2,
                answer_3: answer_3,
              },
            })
          : null;

      return { jobApplication, jobApplicationAnswers };
    });

    return {
      success: true,
      message: "Successfully Submitted Job Application!",
      data: result,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    });
  }
};

const getJobApplicationsByJobIdService = async (userId: number, jobId: number) => {
  try {
    const company = await getOneCompanyByUserId(userId);

    if (!company) {
      throw new ErrorHandler({
        success: false,
        message: "Company Not Found...",
        status: 404,
      });
    }

    const jobApplications = await getJobApplicationsByJobId(company.id, jobId);

    if (jobApplications.length === 0) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Applications",
      data: jobApplications,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const getAllJobApplicationByCompanyService = async (userId: number) => {
  try {
    const company = await getOneCompanyByUserId(userId);

    if (!company) {
      throw new ErrorHandler({
        success: false,
        message: "Company Not Found...",
        status: 404,
      });
    }

    const jobApplications = await getAllJobApplicationByCompany(company.id);

    if (jobApplications.length === 0) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Applications",
      data: jobApplications,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const getOneJobApplicationByCompanyService = async (jobApplicationId: number, userId: number) => {
  try {
    const company = await getOneCompanyByUserId(userId);

    if (!company) {
      throw new ErrorHandler({
        success: false,
        message: "Company Not Found...",
        status: 404,
      });
    }

    const jobApplication = await getOneJobApplicationByCompany(jobApplicationId, company.id);
    if (!jobApplication) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Application",
      data: jobApplication,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const getAllJobApplicationByCompanyAndStatusService = async (userId: number, status: string) => {
  try {
    const company = await getOneCompanyByUserId(userId);

    if (!company) {
      throw new ErrorHandler({
        success: false,
        message: "Company Not Found...",
        status: 404,
      });
    }
    const statusEnum = ["pending", "reviewing", "interview", "reject", "hired"];

    if (!statusEnum.includes(status)) {
      throw new ErrorHandler({
        success: false,
        message: "Invalid Status Provided...",
        status: 404,
      });
    }

    const jobApplications = await getAllJobApplicationByCompanyAndStatus(company.id, status);

    if (jobApplications.length === 0) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Applications",
      data: jobApplications,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const updateOneJobApplicationService = async (jobApplicationId: number, userId: number, newStatus: string) => {
  try {
    const company = await getOneCompanyByUserId(userId);

    if (!company) {
      throw new ErrorHandler({
        success: false,
        message: "Company Not Found...",
        status: 404,
      });
    }

    const jobApplication = await getOneJobApplicationByCompany(jobApplicationId, company.id);
    if (!jobApplication) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    if (jobApplication.status.includes("pending")) {
      if (!(newStatus === "reviewing" || newStatus === "reject")) {
        throw new ErrorHandler({
          success: false,
          message: "Invalid status update",
          status: 400,
        });
      }
    } else if (jobApplication.status.includes("reviewing")) {
      if (!(newStatus === "interview" || newStatus === "reject")) {
        throw new ErrorHandler({
          success: false,
          message: "Invalid status update",
          status: 400,
        });
      }
    } else if (jobApplication.status.includes("interview")) {
      if (!(newStatus === "reject" || newStatus === "hired")) {
        throw new ErrorHandler({
          success: false,
          message: "Invalid status update",
          status: 400,
        });
      }
    } else {
      throw new ErrorHandler({
        success: false,
        message: "Invalid status update",
        status: 400,
      });
    }

    const updateJobApplication = await updateOneJobApplication(jobApplicationId, company.id, newStatus);
    return {
      success: true,
      message: "Successfully Updated Job Application Status",
      data: updateJobApplication,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const getAllJobApplicationByJobSeekerService = async (userId: number) => {
  try {
    const jobSeeker = await getOneJobSeeker(userId);

    if (!jobSeeker) {
      throw new ErrorHandler({
        success: false,
        message: "Please Log In...",
        status: 404,
      });
    }

    const jobApplications = await getAllJobApplicationByJobSeeker(jobSeeker.id);

    if (jobApplications.length === 0) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Applications",
      data: jobApplications,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const getOneJobApplicationByJobSeekerService = async (jobApplicationId: number, userId: number) => {
  try {
    const jobSeeker = await getOneJobSeeker(userId);

    if (!jobSeeker) {
      throw new ErrorHandler({
        success: false,
        message: "Please Log In...",
        status: 404,
      });
    }

    const jobApplication = await getOneJobApplicationByJobSeeker(jobApplicationId, jobSeeker.id);
    if (!jobApplication) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Application",
      data: jobApplication,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

const getAllJobApplicationByJobSeekerAndStatusService = async (userId: number, status: string) => {
  try {
    const jobSeeker = await getOneJobSeeker(userId);

    if (!jobSeeker) {
      throw new ErrorHandler({
        success: false,
        message: "Please Log In...",
        status: 404,
      });
    }
    const statusEnum = ["pending", "reviewing", "interview", "reject", "hired"];

    if (!statusEnum.includes(status)) {
      throw new ErrorHandler({
        success: false,
        message: "Invalid Status Provided...",
        status: 404,
      });
    }

    const jobApplications = await getAllJobApplicationByJobSeekerAndStatus(jobSeeker.id, status);

    if (jobApplications.length === 0) {
      throw new ErrorHandler({
        success: false,
        message: "Job Application Not Found...",
        status: 404,
      });
    }

    return {
      success: true,
      message: "Successfully Fetch Job Applications",
      data: jobApplications,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export {
  getJobApplicationsByJobIdService,
  getAllJobApplicationByCompanyService,
  getOneJobApplicationByCompanyService,
  getAllJobApplicationByCompanyAndStatusService,
  updateOneJobApplicationService,
  createJobApplicationService,
  getAllJobApplicationByJobSeekerService,
  getOneJobApplicationByJobSeekerService,
  getAllJobApplicationByJobSeekerAndStatusService,
};
