declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
interface User {
    id: string;
    email: string;
}

interface JobSeekerRegistrationData {
    email: string;
    password: string;
    role: string;
    fullname: string;
    dob: Date;
    gender: string;
    phone_number: string;
    city: string;
}

interface RecruiterRegistrationData {
    email: string;
    password: string;
    role: string;
    name: string;
    city: string;
    about: string;
    logo: string;
    picture: string;
}

interface Disability {
    id: number;
    category_id: number;
    name: string;
    description: string | null;
}

interface Certificate {
    id: number;
    job_seeker_id: number;
    name: string;
    description: string | null;
}

interface LoginInput{
    email: string,
    password: string
}

interface JobCreate {
    title: string;
    description: string;
    gender: string | null;
    employment_type: string;
    min_salary: number | null;
    max_salary: number | null;
}

interface Skill {
    id: number;
    name: string;
}

interface JobSeekerDataUpdate {
    description: string;
    phone_number: string;
    city: string;
}

interface CompanyDataUpdate {
    name: string;
    city: string;
    about: string;
    logo: string;
    picture: string;
}

interface QuestionsUpdate {
    question_1: string | null;
    question_2: string | null;
    question_3: string | null;
}