import { getOneCompanyByUserId } from '../dao/companyDao';
import { getOneJobListing } from '../dao/jobsDao';
import { getQuestionsByJobId, updateQuestions } from '../dao/questionsDao';
import ErrorHandler from '../utils/errorHandler';

const editQuestionsService = async (userId:number, jobId: number, updateData: QuestionsUpdate) => {
    try {
        const company = await getOneCompanyByUserId(userId)
    
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: "Company Not Found...",
                status: 404
            })
        }

        const job = await getOneJobListing(jobId)
        if (!job) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Listing Not Found..',
                status: 404
            });
        }

        if (job.company_id !== company.id) {
            throw new ErrorHandler({
                success: false,
                message: "Cannot Update Job Listing...",
                status: 400
            })
        }
        const questions = await getQuestionsByJobId(jobId)

        if (!questions) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Listing has no additional questions..',
                status: 404
            });
        }

        const updateQuestion = await updateQuestions(questions.id, updateData)
        return {
            success: true,
            message: "Successfully Updated Job Listing's Additional Questions",
            data: updateQuestion 
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

export { editQuestionsService }