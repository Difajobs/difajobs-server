import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getJobSeekerCertificateList = async (jobSeekerId: number) => {
    try {
        const jobSeeker = await prisma.list_certificate.findMany({
            where: {job_seeker_id: jobSeekerId}
        })
        return jobSeeker
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

const updateJobSeekerCertificate = async (certificateId: number, data: any) => {
    try {
        const updateCertificate = await prisma.list_certificate.update({
            where: {id: certificateId},
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

const deleteJobSeekerCertificate = async (certificateId: number) => {
    try {
        const jobSeeker = await prisma.list_certificate.delete({
            where: {id: certificateId}
        })
        return jobSeeker
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

export { getJobSeekerCertificateList, updateJobSeekerCertificate, deleteJobSeekerCertificate }