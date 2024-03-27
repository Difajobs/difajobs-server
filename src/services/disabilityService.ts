import { postListDisability } from '../dao/disabilityDao';
import ErrorHandler from '../utils/errorHandler';

const disabiltyListService = async (categoryIds: number[]) => {
    try {
        const nestedDisabilities = await postListDisability(categoryIds);
        const categorizedDisabilities = nestedDisabilities.map((disabilities, index) => ({
            category_id: categoryIds[index],
            disabilities: disabilities
        }));

        return {
            success: true,
            message: "Disability list retrieved successfully",
            data: categorizedDisabilities
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

export { disabiltyListService }