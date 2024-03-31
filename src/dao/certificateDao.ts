import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createNewCertificate = async (jobSeekerId: number, userData: Certificate) => {
    try {
        const newCertificate = prisma.list_certificate.create({
            data: {
                job_seeker_id: jobSeekerId,
                name: userData.name,
                description: userData.description
            },
            include: {
                job_seeker: {
                    select: {
                        fullname: true
                    }
                }
            }
        })

        return newCertificate
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

const getOneJobSeekerCertificate = async (certificateId: number, jobSeekerId: number) => {
    try {
        const certificate = await prisma.list_certificate.findUnique({
            where: {id: certificateId, job_seeker_id: jobSeekerId},
            include: {
                job_seeker: {
                    select: {
                        fullname: true
                    }
                }
            }
        })
        return certificate
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

const getJobSeekerCertificateList = async (jobSeekerId: number) => {
    try {
        const certificateList = await prisma.list_certificate.findMany({
            where: {job_seeker_id: jobSeekerId},
            include: { 
                job_seeker: {
                    select: {
                        fullname: true
                    }
                }
            }
        })
        return certificateList
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

const updateJobSeekerCertificate = async (certificateId: number, jobSeekerId: number, data: any) => {
    try {
        const updateCertificate = await prisma.list_certificate.update({
            where: {id: certificateId, job_seeker_id: jobSeekerId},
            data
        });
        return updateCertificate;
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

const deleteJobSeekerCertificate = async (certificateId: number, jobSeekerId: number) => {
    try {
        const deleteCertificate = await prisma.list_certificate.delete({
            where: {id: certificateId, job_seeker_id: jobSeekerId}
        })
        return deleteCertificate
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

export { createNewCertificate, getOneJobSeekerCertificate, getJobSeekerCertificateList, updateJobSeekerCertificate, deleteJobSeekerCertificate }