import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/UserController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

export default router;
