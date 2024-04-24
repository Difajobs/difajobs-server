import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const postCreateQuestions = async (job_id: number, question_1: string, question_2: string, question_3: string) => {
    try {
        const newQuestions = await prisma.questions.create({
            data: {
                job_id: job_id,
                question_1: question_1,
                question_2: question_2,
                question_3: question_3
            }
        })
        return newQuestions
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const getQuestionsByJobId = async (jobId: number) => {
    try {
        const question = await prisma.questions.findFirst({
            where: {job_id: jobId}
        })
        return question
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const getQuestions = async (questionId: number) => {
    try {
        const question = await prisma.questions.findUnique({
            where: {id: questionId}
        })
        return question
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const updateQuestions = async (questionId: number, data: QuestionsUpdate) => {
    try {
        const question = await prisma.questions.update({
            where: {id: questionId},
            data: {
                question_1: data.question_1,
                question_2: data.question_2,
                question_3: data.question_3
            }
        })
        return question
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

const deleteQuestions = async (questionId: number) => {
    try {
        const question = await prisma.questions.delete({
            where: {id: questionId}
        })
        return question
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        });
    } finally {
        await disconnectDB();
    }
}

export { postCreateQuestions, getQuestions, getQuestionsByJobId, updateQuestions, deleteQuestions }