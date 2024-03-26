import { createNewCertificate, deleteJobSeekerCertificate, getJobSeekerCertificateList, getOneJobSeekerCertificate, updateJobSeekerCertificate } from '../dao/certificateDao';
import { getOneJobSeeker } from '../dao/userDao';
import ErrorHandler from '../utils/errorHandler';

const createJobSeekerCertificateService = async (userId: number, userData: Certificate) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId);
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        } 
       
        if (!userData) {
            throw new ErrorHandler({
                success: false,
                message: 'Insufficient Data.. Please try again',
                status: 400
            });
        }
        const newCertificate = await createNewCertificate(jobSeeker.id, userData);

        return {
            success: true,
            message: "Successfully Create Job Seeker Certificate.",
            data: { newCertificate }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const getJobSeekerCertificateListService = async (userId: number) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
        } 

        const certificateList = await getJobSeekerCertificateList(jobSeeker.id)
        return {
            success: true,
            message: "Successfully Fetch Job Seeker Certificate List:",
            data: { certificateList }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}
const updateJobSeekerCertificateService = async (userId: number, certificateId: number, updateData: any) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId);
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
            
        } 
        
        const certificate = await getOneJobSeekerCertificate(certificateId, jobSeeker.id)
        if (!certificate) {
            throw new ErrorHandler({
                success: false,
                message: 'Certificate Not Found.. Please Try Again',
                status: 404
            });
        }
        
        const filteredUpdateData: any = {};
        for (const key in updateData) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }

        const updatedCertificate = await updateJobSeekerCertificate(certificateId, jobSeeker.id, filteredUpdateData);

        return {
            success: true,
            message: "Successfully Update Job Seeker Certificate.",
            data: { updatedCertificate }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const deleteJobSeekerCertificateService = async (userId: number, certificateId: number) => {
    try {
        const jobSeeker = await getOneJobSeeker(userId)
        if (!jobSeeker) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Seeker Not Found.. Please login',
                status: 404
            });
            
        } 

        const certificate = await getOneJobSeekerCertificate(certificateId, jobSeeker.id)
        if (!certificate) {
            throw new ErrorHandler({
                success: false,
                message: 'Certificate Not Found.. Please Try Again',
                status: 404
            });
        }
        const deleteCertificate = await deleteJobSeekerCertificate(certificateId, jobSeeker.id)
        return {
            success: true,
            message: "Successfully removed job seeker certificate.",
            data: { deleteCertificate }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

export { createJobSeekerCertificateService, getJobSeekerCertificateListService, updateJobSeekerCertificateService, deleteJobSeekerCertificateService }