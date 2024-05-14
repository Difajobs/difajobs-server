# Welcome to Difajob!
Hello! We are Team 1 from RevoU NEXT Batch 2 - Bellatrix, a team of Aspiring Software Engineers focused on bringing innovative solutions to real-world dilemmas. On this special occasion, we strive to take on the challenge to help our friends impacted by various kinds of disabilities to thread their future!

**Background**: Striving to tackle as many goals from the 17 SDGs as possible through our application, we hope to contribute to specific goals below:

- **Reduced Inequality**: through this project, our main focus is to bring equality to anyone affected by disabilities.
- **Decent Work & Economic Growth**: we firmly believe that helping our prospective users through decent work employment will not only empower our users but also stimulate economic growth.
- **No Poverty**: with the help of decent employment, we seek to play our part in alleviating poverty and improving livelihoods.


## Project Features
- Register & Login
- Dashboard (Job Listing)
- Job Search (by Job title and Location)
- Job Application (by Job Seeker)
- Job Posting (by Company)
- Separate Profiles for Job Seeker and Company

## Tech Stack 
- Programming Language  : Typescript
- Database              : Supabase (PostgreSQL) 
- Framework             : NodeJs (Express Js)
- ORM                   : Prisma
- Authentication        : JWT, localstorage
- ther Library          : nodemailer
- Deployment            : Vercel

## Links
- Documentation (Postman)   : [Documentation](https://documenter.getpostman.com/view/29093953/2sA35HXLs2)
- Back End (Deployed)       : [BackEnd-Deployed](https://difajobs-server.vercel.app)
- Front End (Repo)          : [FrontEnd-Repo](https://github.com/Difajobs/difajobs-client) 
- Front End (Deployed)      : [FrontEnd-Deployed](https://difajobs.web.app/)
- Pitching Deck             : [Deck](https://docs.google.com/presentation/d/1yereBnAs77MJacHM9p1Jok5sD_O6mhUMJuEuH1WHPwE/edit?usp=sharing)

## How to Set Up

To Start the Difa Jobs Server, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Difajobs/difajobs-server.git
```

2. Navigate into the project directory:

```bash
cd difajobs-server
```

3. Open it in VSCode or any other of your choice:

```bash
code .
```
4. Install The Dependencies:

```bash
npm install
```

5. Prepare the environment file `.env` (please contact us if you need help)
<br>
6. Run the Server

```bash
npm run dev
```

7. Test the APIs through Postman. by using this link as the base and check the next part (Endpoint List):

```bash
http://localhost:3000/
```


## Endpoints

**AUTH**
<div align="center">

| Name  | HTTP Method | Endpoint | Authentication | Authorization |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **Homepage** | `GET` |[/](https://difajobs-server.vercel.app/) | ❌ | ❌ |
| **Register Job Seeker** | `POST` | [/v1/auth/jobseeker-register](https://difajobs-server.vercel.app/v1/auth/jobseeker-register) | ❌ | ❌ |
| **Register Recruiter** | `POST` | [/v1/auth/recruiter-register](https://difajobs-server.vercel.app/v1/auth/recruiter-register) | ❌ | ❌ |
| **Request Verification Token** | `POST` | [/v1/auth/token-send](https://difajobs-server.vercel.app/v1/auth/token-send) | ❌ | ❌ |
| **Token Verification** | `GET` | [/v1/auth/token-verify](https://difajobs-server.vercel.app/v1/auth/token-verify) | ❌ | ❌ |
| **Login User** | `POST` | [/v1/auth/login](https://difajobs-server.vercel.app/v1/auth/login) | ❌ | ❌ |
| **Logout User** | `POST` | [/v1/auth/logout](https://difajobs-server.vercel.app/v1/auth/logout) | ✔ | ❌ |
</div>

**JOB SEEKER**
<div align="center">

| Name  | HTTP Method | Endpoint | Authentication | Authorization |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **Job Seeker Profile** | `GET` | [/v1/user/](https://difajobs-server.vercel.app/v1/user) | ✔ | **JOB_SEEKER** |
| **Update Job Seeker Personal Data** | `PUT` | [/v1/user/personal](https://difajobs-server.vercel.app/v1/user/personal) | ✔ | **JOB_SEEKER** |
| **Get Job Seeker Skill** | `GET` | [/v1/skill](https://difajobs-server.vercel.app/v1/skill) | ✔ | **JOB_SEEKER** |
| **Add Job Seeker Skill** | `POST` | [/v1/skill](https://difajobs-server.vercel.app/v1/skill) | ✔ | **JOB_SEEKER** |
| **Remove Job Seeker Skill** | `DELETE` | [/v1/skill/:jobSeekerSkillId](https://difajobs-server.vercel.app/v1/skill/1) | ✔ | **JOB_SEEKER** |
| **Get Job Seeker Certificates** | `GET` | [/v1/certificate](https://difajobs-server.vercel.app/v1/certificate) | ✔ | **JOB_SEEKER** |
| **Add Job Seeker Certificate** | `POST` | [/v1/certificate](https://difajobs-server.vercel.app/v1/certificate) | ✔ | **JOB_SEEKER** |
| **Update Job Seeker Certificate** | `PATCH` | [/v1/certificate/:certificateId](https://difajobs-server.vercel.app/v1/certificate/1) | ✔ | **JOB_SEEKER** |
| **Remove Job Seeker Certificate** | `DELETE` | [/v1/certificate/:certificateId](https://difajobs-server.vercel.app/v1/certificate/1) | ✔ | **JOB_SEEKER** |
| **Create Job Application** | `POST` | [/v1/job-application/:jobId](https://difajobs-server.vercel.app/v1/job-application/1) | ✔ | **JOB_SEEKER** |
| **Get All Job Applications** | `GET` | [/v1/job-application/by-jobseeker/all](https://difajobs-server.vercel.app/v1/job-application/by-jobseeker/all) | ✔ | **JOB_SEEKER** |
| **Get One Job Application** | `GET` | [/v1/job-application/by-jobseeker/:jobApplicationId](https://difajobs-server.vercel.app/v1/job-application/by-jobseeker/1) | ✔ | **JOB_SEEKER** |
| **Get All Job Applications By Status** | `GET` | [/v1/job-application/by-jobseeker/status/:status](https://difajobs-server.vercel.app/v1/job-application/by-jobseeker/status/pending) | ✔ | **JOB_SEEKER** |
</div>

**DASHBOARD / JOB SEARCH**
<div align="center">

| Name  | HTTP Method | Endpoint | Authentication | Authorization |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **Job Search** | `GET` | [/v1/jobs/title=?&location=?](https://difajobs-server.vercel.app/v1/jobs/title=?&location=?) | ✔ | **JOB_SEEKER**, **RECRUITER** |
| **Get One Job** | `GET` | [/v1/jobs/:jobId](https://difajobs-server.vercel.app/v1/jobs/1) | ✔ | **JOB_SEEKER**, **RECRUITER** |

</div>

**RECRUITER**
<div align="center">

| Name  | HTTP Method | Endpoint | Authentication | Authorization |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **Recruiter Profile** | `GET` | [/v1/company/:companyId](https://difajobs-server.vercel.app/v1/company/1) | ✔ | ❌ |
| **Update Recruiter Info (In Profile)** | `PATCH` | [/v1/company](https://difajobs-server.vercel.app/v1/company) | ✔ | **RECRUITER** |
| **Get Recruiter Job Listings** | `GET` | [/v1/company/:companyId/jobs](https://difajobs-server.vercel.app/v1/company/1/jobs) | ✔ | ❌ |
| **Create Job Listing** | `POST` | [/v1/jobs](https://difajobs-server.vercel.app/v1/jobs) | ✔ | **RECRUITER** |
| **Edit Job Listing** | `PATCH` | [/v1/jobs/:jobId](https://difajobs-server.vercel.app/v1/jobs/1) | ✔ | **RECRUITER** |
| **Delete Job Listing** | `DELETE` | [/v1/jobs/:jobId](https://difajobs-server.vercel.app/v1/jobs/1) | ✔ | **RECRUITER** |
| **Get All Job Applications by Company** | `GET` | [/v1/job-application/all](https://difajobs-server.vercel.app/v1/job-application/all) | ✔ | **RECRUITER** |
| **Get All Job Application by Job Id** | `GET` | [/v1/job-application/job/:jobId](https://difajobs-server.vercel.app/v1/job-application/job/1) | ✔ | **RECRUITER** |
| **Get All Job Applications by Status** | `GET` | [/v1/job-application/status/:status](https://difajobs-server.vercel.app/v1/job-application/status/pending) | ✔ | **RECRUITER** |
| **Get One Job Applications by Company** | `GET` | [/v1/job-application/application/:jobApplicationId](https://difajobs-server.vercel.app/v1/job-application/application/1) | ✔ | **RECRUITER** |
| **Update Job Application Status** | `PUT` | [/v1/job-application/application/:jobApplicationId](https://difajobs-server.vercel.app/v1/job-application/application/1) | ✔ | **RECRUITER** |
| **Add Job Listing Required Skill** | `POST` | [/v1/skill/required-skill/:jobId](https://difajobs-server.vercel.app/v1/skill/required-skill/1) | ✔ | **RECRUITER** |
| **Delete Job Listing Required Skill** | `DELETE` | [/v1/skill/required-skill/:requiredSkillId](https://difajobs-server.vercel.app/v1/skill/required-skill/1) | ✔ | **RECRUITER** |
| **Add Job Listing List Ability** | `POST` | [/v1/list-ability/:jobId](https://difajobs-server.vercel.app/v1/list-ability/1) | ✔ | **RECRUITER** |
| **Delete Job Listing List Ability** | `DELETE` | [/v1/list-ability/:listAbilityId](https://difajobs-server.vercel.app/v1/list-ability/1) | ✔ | **RECRUITER** |
| **Edit Job Listing Questions** | `PATCH` | [/v1/questions/:jobId](https://difajobs-server.vercel.app/v1/questions/1) | ✔ | **RECRUITER** |
</div>

## Feedbacks
Thank you for your keen interest in Difajobs, we recognize the everlasting need to upgrade and transform oneself to always be a better version, therefore we would like to invite you to fill in the feedback form below:
<br>
[Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLSdWq6YRZES3EbbOEvE5RDtm58Dxmw0qriqLzF1w3YrV2Mex5Q/viewform)

Thank you!

## Contributing
Contributions to Difajobs Server (Back End) project are welcome! If you find any bugs, issues, or have feature requests, please open an issue on this repository. Additionally, if you'd like to contribute code, feel free to fork the repository and submit a pull request with your changes. Happy Coding!

## License
This project is licensed under the MIT License.

<!-- **Login Endpoint:**

![Screenshot 2024-03-27 011416](https://github.com/Difajobs/difajobs-server/assets/130155172/5919c17c-2f54-4361-9756-044c5dea46b3)

**Logout Endpoint:**

![Screenshot 2024-03-27 011438](https://github.com/Difajobs/difajobs-server/assets/130155172/e8998a54-6c5b-4472-96af-110a88735d29) -->
