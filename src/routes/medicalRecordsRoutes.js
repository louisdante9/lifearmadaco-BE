// medicalRecordsRoutes.js

import express from 'express';
import { getMedicalRecords, addMedicalRecord } from '../controllers/MedicalRecordsController.js';

const router = express.Router();

// GET /medical-records/:clientId - Retrieve electronic medical records for a client
router.get('/medical-records/:clientId', getMedicalRecords);

// POST /medical-records - Add new medical records for a client
router.post('/medical-records', addMedicalRecord);

export default router;
