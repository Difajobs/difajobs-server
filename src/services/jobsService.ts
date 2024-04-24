import { getOneCompany, getOneCompanyByUserId } from '../dao/companyDao';
import { getAllJobListing, getCompanyId, getCompanyJobsList, postJob, searchJobListingByTitle, searchJobListingByLocation, getOneJobListing, updateJobListing, deleteJobListing } from '../dao/jobsDao';
import { deleteListAbility, postCreateListAbility } from '../dao/abilityDao';
import ErrorHandler from '../utils/errorHandler';
import { createSkills, getSkillListByName } from '../dao/skillsDao';
import { deleteRequiredSkill, postCreateRequiredSkills } from '../dao/requiredSkillDao';
import { postCreateQuestions } from '../dao/questionsDao';
import { getJobApplicationsByJobId } from '../dao/jobApplicationDao';

// ------ create jobs ------
const createJobService = async (userId: number, userData: JobCreate, ability_id: number[], skillNames: string[], question_1: string, question_2: string, question_3: string) => {
    try {
        const company = await getCompanyId(userId);
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company not found',
                status: 404
            });
        }
        const job = await postJob(company.id, userData);
        const checkSkills = await getSkillListByName(skillNames);

        const createRequiredSkill = async () => {
            const skills: any = [];
            await Promise.all(skillNames.map(async (skillName) => {
                const existingSkill = checkSkills.find(skill => skill.name === skillName);
                if (existingSkill) {
                    const addExistingSkill = await postCreateRequiredSkills(job.id, existingSkill.id);
                    skills.push(addExistingSkill);
                } else {
                    const newSkill = await createSkills(skillName);
                    const addNewSkill = await postCreateRequiredSkills(job.id, newSkill.id);
                    skills.push(addNewSkill);
                }
            }));
            return skills;
        };

        const listAbility = await postCreateListAbility(job.id, ability_id);
        const requiredSkills = await createRequiredSkill();
        const additionalQuestion = await postCreateQuestions(job.id, question_1, question_2, question_3)
        return {
            success: true,
            message: "New job created successfully",
            data: { job, listAbility, requiredSkills, additionalQuestion }
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

const getCompanyJobsListService = async (companyId: number) => {
    try {
        const company = await getOneCompany(companyId)
        if (!company) {
            throw new ErrorHandler({
                success: false,
                message: 'Company Not Found..',
                status: 404
            });
        } 

        const companyJobsList = await getCompanyJobsList(companyId)

        return {
            success: true,
            message: "Successfully Fetch Company's Job listing list:",
            data: companyJobsList.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const getAllJobsService = async (pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const jobs = await getAllJobListing(pageSize, offset)

        if (!jobs.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }

        return {
            success: true,
            message: "Successfully Fetch Job listings:",
            data: jobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const searchJobByTitleService = async (title: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobs = await searchJobListingByTitle(title, pageSize, offset)
        if (!searchJobs.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: searchJobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const searchJobByLocationService = async (location: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobs = await searchJobListingByLocation(location, pageSize, offset)
        if (!searchJobs.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: searchJobs.map(job => ({
                ...job,
                min_salary: job.min_salary?.toString(),
                max_salary: job.max_salary?.toString(),
                list_ability: job.list_ability.map(ability => ability.ability?.name),
                required_skills: job.required_skills.map(skill => skill.skills.name)
            }))
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

const searchJobByTitleAndLocationService = async (location: string | undefined, title: string | undefined, pageSize: number, pageNumber: number) => {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const searchJobsByLocation = await searchJobListingByLocation(location, pageSize, offset)
        const searchJobsByTitle = await searchJobListingByTitle(title, pageSize, offset)

        if (!searchJobsByLocation.length && !searchJobsByTitle.length) {
            throw new ErrorHandler({
                success: false,
                message: 'Search Failed.. No Job Listing Found',
                status: 404
            });
        }
        console.log(searchJobsByLocation, searchJobsByTitle )

        const jobsByLocation = searchJobsByLocation.map(job => ({
            ...job,
            min_salary: job.min_salary?.toString(),
            max_salary: job.max_salary?.toString(),
            list_ability: job.list_ability.map(ability => ability.ability?.name),
            required_skills: job.required_skills.map(skill => skill.skills.name)
        }))

        const jobsByTitle = searchJobsByTitle.map(job => ({
            ...job,
            min_salary: job.min_salary?.toString(),
            max_salary: job.max_salary?.toString(),
            list_ability: job.list_ability.map(ability => ability.ability?.name),
            required_skills: job.required_skills.map(skill => skill.skills.name)
        }))

        return {
            success: true,
            message: "Successfully Fetch Job Listings:",
            data: [...jobsByLocation, ...jobsByTitle]
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

const getOneJobListingService = async (jobId: number) => {
    try {
        const job = await getOneJobListing(jobId)
        if (!job) {
            throw new ErrorHandler({
                success: false,
                message: 'Job Listing Not Found..',
                status: 404
            });
        }

        return {
            success: true,
            message: "Successfully Fetch Job Listing",
            data: job
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

const updateJobListingService = async (jobId: number, userId: number, updateData: JobCreate) => {
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
                message: "Job Not Found...",
                status: 404
            })
        }

        const updateJob = await updateJobListing(jobId, company.id, updateData)

        return {
            success: true,
            message: "Successfully Updated Job Listing's Information",
            data: updateJob
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

const deleteJobListingService = async (jobId: number, userId: number) => {
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
                message: "Job Not Found...",
                status: 404
            })
        }

        const checkJobApplications = await getJobApplicationsByJobId(company.id, jobId)

        if (checkJobApplications.some(jobApplication => jobApplication.status !== "reject" && jobApplication.status !== "hired")) {
            throw new ErrorHandler({
                success: false,
                message: "Cannot perform action. There are active job applications for this job....",
                status: 400
            })
        }

        const deleteJob = await deleteJobListing(jobId, company.id)

        return {
            success: true,
            message: "Successfully Deleted Job Listing",
            data: deleteJob
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

export { 
    createJobService, 
    getCompanyJobsListService, 
    getAllJobsService, 
    searchJobByTitleService, 
    searchJobByLocationService, 
    searchJobByTitleAndLocationService, 
    getOneJobListingService,
    updateJobListingService,
    deleteJobListingService 
}