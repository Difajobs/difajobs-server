import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createAnswers = async (
  jobId: number,
  jobApplicationId: number,
  answer_1: string | null,
  answer_2: string | null,
  answer_3: string | null
) => {
  try {
    const newQuestions = await prisma.answers.create({
      data: {
        job_id: jobId,
        job_application_id: jobApplicationId,
        answer_1: answer_1,
        answer_2: answer_2,
        answer_3: answer_3,
      },
    });
    return newQuestions;
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

export { createAnswers };
