// ewalletRoutes.js

import express from 'express';
import { processPayment, getTransactionHistory } from '../controllers/EwalletController.js';

const router = express.Router();

// POST /payments - Process payment transactions from clients to service providers
router.post('/payments', processPayment);

// GET /transactions/:clientId - Retrieve transaction history for a client
router.get('/transactions/:clientId', getTransactionHistory);

export default router;
