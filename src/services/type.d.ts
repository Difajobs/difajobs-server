interface UserRegistrationData {
    email: string;
    password: string;
    role: string;
    fullname: string;
    dob: Date;
    gender: string;
    phone_number: string;
    city: string;
}

interface Disability {
    id: number;
    category_id: number;
    name: string;
    description: string | null;
}
