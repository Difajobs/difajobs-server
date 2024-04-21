import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createJobApplication = async (companyId: number, jobId: number, jobSeekerId: number,coverLetter: string | null) => {
    try {
        const newJobApplication = await prisma.job_application.create({
            data: {
                company_id: companyId,
                job_id: jobId,
                job_seeker_id: jobSeekerId,
                cover_letter: coverLetter,
                status: "pending"
            }
        })

        return newJobApplication
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
}

const getJobApplicationsByJobId = async (companyId : number, jobId : number) => {
    try {
        const jobApplication = await prisma.job_application.findMany({
            where: { 
                company_id: companyId,
                job_id: jobId 
            },
            include: {
                answers: true,
                job_seeker: {
                    select: {
                        fullname: true,
                        city: true,
                        gender: true,
                        description: true,
                        phone_number: true,
                        user: {
                            select: {
                                email: true
                            }
                        },
                        job_seeker_skills: {
                            select:{
                                skills: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        },
                        disabilities: {
                            select: {
                                disability: {
                                    select: {
                                        category: {
                                            select: {
                                                name: true
                                            }
                                        },
                                        name: true
                                    }
                                }
                            }
                        },
                        certificates: {
                            select: {
                                name: true,
                                description: true
                            }
                        },
                    }
                }
            }
        })
        return jobApplication
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
}

const getAllJobApplicationByCompany = async (companyId : number) => {
    try {
        const jobApplications = await prisma.job_application.findMany({
            where: { company_id: companyId },
            include: {
                answers: true,
                job_seeker: {
                    select: {
                        fullname: true,
                        city: true,
                        gender: true,
                        description: true,
                        phone_number: true,
                        user: {
                            select: {
                                email: true
                            }
                        },
                        job_seeker_skills: {
                            select:{
                                skills: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        },
                        disabilities: {
                            select: {
                                disability: {
                                    select: {
                                        category: {
                                            select: {
                                                name: true
                                            }
                                        },
                                        name: true
                                    }
                                }
                            }
                        },
                        certificates: {
                            select: {
                                name: true,
                                description: true
                            }
                        },
                    }
                }
            }
        })
        return jobApplications
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
}

const getOneJobApplicationByCompany = async (jobApplicationId: number, companyId: number) => {
    try {
        const jobApplication = await prisma.job_application.findUnique({
            where: { id: jobApplicationId, company_id: companyId },
            include: {
                answers: true,
                job_seeker: {
                    select: {
                        fullname: true,
                        city: true,
                        gender: true,
                        description: true,
                        phone_number: true,
                        user: {
                            select: {
                                email: true
                            }
                        },
                        job_seeker_skills: {
                            select:{
                                skills: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        },
                        disabilities: {
                            select: {
                                disability: {
                                    select: {
                                        category: {
                                            select: {
                                                name: true
                                            }
                                        },
                                        name: true
                                    }
                                }
                            }
                        },
                        certificates: {
                            select: {
                                name: true,
                                description: true
                            }
                        },
                    }
                }
            }
        })
        return jobApplication
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
}

const getAllJobApplicationByCompanyAndStatus = async (companyId : number, status: string) => {
    try {
        const jobApplications = await prisma.job_application.findMany({
            where: { company_id: companyId, status: status },
            include: {
                answers: true,
                job_seeker: {
                    select: {
                        fullname: true,
                        city: true,
                        gender: true,
                        description: true,
                        phone_number: true,
                        user: {
                            select: {
                                email: true
                            }
                        },
                        job_seeker_skills: {
                            select:{
                                skills: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        },
                        disabilities: {
                            select: {
                                disability: {
                                    select: {
                                        category: {
                                            select: {
                                                name: true
                                            }
                                        },
                                        name: true
                                    }
                                }
                            }
                        },
                        certificates: {
                            select: {
                                name: true,
                                description: true
                            }
                        },
                    }
                }
            }
        })
        return jobApplications
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
}

const updateOneJobApplication = async (jobApplicationId: number, companyId: number, newStatus: string) => {
    try {
        const updateJobApplication = await prisma.job_application.update({
            where: { id: jobApplicationId, company_id: companyId },
            data: { status: newStatus},
            include: {
                answers: true,
                job_seeker: {
                    select: {
                        fullname: true,
                        city: true,
                        gender: true,
                        description: true,
                        phone_number: true,
                        user: {
                            select: {
                                email: true
                            }
                        },
                        job_seeker_skills: {
                            select:{
                                skills: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        },
                        disabilities: {
                            select: {
                                disability: {
                                    select: {
                                        category: {
                                            select: {
                                                name: true
                                            }
                                        },
                                        name: true
                                    }
                                }
                            }
                        },
                        certificates: {
                            select: {
                                name: true,
                                description: true
                            }
                        },
                    }
                }
            }
        })
        return updateJobApplication
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
}

export { createJobApplication, getJobApplicationsByJobId, getAllJobApplicationByCompany, getOneJobApplicationByCompany, getAllJobApplicationByCompanyAndStatus, updateOneJobApplication }