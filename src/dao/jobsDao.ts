import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getCompanyId = async (userId: number) => {
  try {
    const company = await prisma.company.findFirst({
      where: { user_id: userId },
    });
    return company;
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
};

const postJob = async (company_id: number, userData: JobCreate) => {
  const { title, description, gender, employment_type, min_salary, max_salary } = userData;
  try {
    const newJob = await prisma.jobs.create({
      data: {
        company_id: company_id,
        title: title,
        description: description,
        gender: gender,
        employment_type: employment_type,
        min_salary: min_salary,
        max_salary: max_salary,
        date_posted: new Date(),
      },
    });
    return newJob;
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
};

const getCompanyJobsList = async (companyId: number) => {
  try {
    const companyJobsList = await prisma.jobs.findMany({
      where: { company_id: companyId },
      orderBy: {
        date_posted: "desc",
      },
      include: {
        company: {
          select: {
            name: true,
            city: true,
            logo: true,
          },
        },
        list_ability: {
          select: {
            ability: {
              select: {
                name: true,
              },
            },
          },
        },
        required_skills: {
          select: {
            skills: {
              select: {
                name: true,
              },
            },
          },
        },
        questions: {
          select: {
            question_1: true,
            question_2: true,
            question_3: true,
          },
        },
      },
    });

    return companyJobsList;
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
};

const searchJobListingByTitle = async (searchTitle: string | undefined, limit: number, offset: number) => {
  try {
    const getJobListing = await prisma.jobs.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchTitle ? searchTitle.toLowerCase() : undefined,
            },
          },
          {
            description: {
              contains: searchTitle ? searchTitle.toLowerCase() : undefined,
            },
          },
        ],
      },
      include: {
        company: {
          select: {
            name: true,
            city: true,
            logo: true,
          },
        },
        list_ability: {
          select: {
            ability: {
              select: {
                name: true,
              },
            },
          },
        },
        required_skills: {
          select: {
            skills: {
              select: {
                name: true,
              },
            },
          },
        },
        questions: {
          select: {
            question_1: true,
            question_2: true,
            question_3: true,
          },
        },
      },
      orderBy: {
        date_posted: "desc",
      },
      take: limit,
      skip: offset,
    });

    return getJobListing;
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
};

const searchJobListingByLocation = async (searchLocation: string | undefined, limit: number, offset: number) => {
  try {
    const getJobListing = await prisma.jobs.findMany({
      where: {
        OR: [
          {
            company: {
              city: {
                contains: searchLocation ? searchLocation.toLowerCase() : undefined,
              },
            },
          },
        ],
      },
      include: {
        company: {
          select: {
            name: true,
            city: true,
            logo: true,
          },
        },
        list_ability: {
          select: {
            ability: {
              select: {
                name: true,
              },
            },
          },
        },
        required_skills: {
          select: {
            skills: {
              select: {
                name: true,
              },
            },
          },
        },
        questions: {
          select: {
            question_1: true,
            question_2: true,
            question_3: true,
          },
        },
      },
      orderBy: {
        date_posted: "desc",
      },
      take: limit,
      skip: offset,
    });

    return getJobListing;
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
};

const getAllJobListing = async (limit: number, offset: number) => {
  try {
    const allJobListing = await prisma.jobs.findMany({
      orderBy: {
        date_posted: "asc",
      },
      include: {
        company: {
          select: {
            name: true,
            city: true,
            logo: true,
          },
        },
        list_ability: {
          select: {
            ability: {
              select: {
                name: true,
              },
            },
          },
        },
        required_skills: {
          select: {
            skills: {
              select: {
                name: true,
              },
            },
          },
        },
        questions: {
          select: {
            question_1: true,
            question_2: true,
            question_3: true,
          },
        },
      },
      take: limit,
      skip: offset,
    });
    return allJobListing;
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
};

const getOneJobListing = async (jobId: number) => {
  try {
    const jobListing = await prisma.jobs.findUnique({
      where: { id: jobId },
      include: {
        company: {
          select: {
            name: true,
            city: true,
            logo: true,
          },
        },
        list_ability: {
          select: {
            ability: {
              select: {
                name: true,
              },
            },
          },
        },
        required_skills: {
          select: {
            skills: {
              select: {
                name: true,
              },
            },
          },
        },
        questions: {
          select: {
            question_1: true,
            question_2: true,
            question_3: true,
          },
        },
      },
    });
    return jobListing;
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
};

const getOneJob = async (jobId: number) => {
  try {
    const jobListing = await prisma.jobs.findUnique({
      where: { id: jobId },
    });
    return jobListing;
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
};

const updateJobListing = async (jobId: number, companyId: number, data: JobCreate) => {
  try {
    const updateJob = await prisma.jobs.update({
      where: { id: jobId, company_id: companyId },
      data: {
        title: data.title,
        description: data.description,
        employment_type: data.employment_type,
        gender: data.gender,
        min_salary: data.min_salary,
        max_salary: data.max_salary,
      },
    });
    return updateJob;
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
};

const deleteJobListing = async (jobId: number, companyId: number) => {
  try {
    const deleteJob = await prisma.jobs.delete({
      where: { id: jobId, company_id: companyId },
    });
    return deleteJob;
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
};

export {
  getCompanyId,
  postJob,
  getCompanyJobsList,
  searchJobListingByTitle,
  searchJobListingByLocation,
  getAllJobListing,
  getOneJobListing,
  updateJobListing,
  deleteJobListing,
  getOneJob,
};
