import express from 'express';
import { createJobSeekerCertificate, deleteJobSeekerCertificate, getJobSeekerCertificateList, updateJobSeekerCertificate } from '../../../controllers/certificate';

const certificateRouter = express.Router()

certificateRouter.post('/', createJobSeekerCertificate)
certificateRouter.get('/', getJobSeekerCertificateList)
certificateRouter.patch('/:certificateId', updateJobSeekerCertificate)
certificateRouter.delete('/:certificateId', deleteJobSeekerCertificate)

export default certificateRouter