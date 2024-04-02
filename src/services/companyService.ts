import { updateCompanyProfile } from '../dao/companyDao';
import ErrorHandler from '../utils/errorHandler';


const updateCompanyProfileService = async (userId: number, updateData: any) => {
    try {
        // Assuming you have a function to check if the company exists
        const updatedCompany = await updateCompanyProfile(userId, updateData);
        if (updatedCompany.count === 0) {
            throw new ErrorHandler({
                success: false,
                message: 'Company profile not found or not associated with the user',
                status: 404
            });
        }
        return {
            success: true,
            message: "Company profile updated successfully",
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

export { updateCompanyProfileService };