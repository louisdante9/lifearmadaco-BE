// telemedicineRoutes.js

import express from 'express';
import { initiateTelemedicineConsultation, getTelemedicineSessionById } from '../controllers/TelemedicineController.js';

const router = express.Router();

// POST /telemedicine-consultation - Initiate a telemedicine consultation session
router.post('/telemedicine-consultation', initiateTelemedicineConsultation);

// GET /telemedicine-consultation/:id - Retrieve details of a specific telemedicine session
router.get('/telemedicine-consultation/:id', getTelemedicineSessionById);

export default router;
