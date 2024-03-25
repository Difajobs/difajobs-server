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