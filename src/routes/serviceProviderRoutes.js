import express from "express";
import authMiddleware from '../middleware/authMiddleware.js';
import {
  getServiceProviders,
  getServiceProviderById,
  addServiceProvider,
  updateServiceProvider,
  deleteServiceProvider,
} from "../controllers/ServiceProviderController.js";

const router = express.Router();

router.get("/service-providers", getServiceProviders);
router.get("/service-providers/:id", getServiceProviderById);
router.post("/service-providers", addServiceProvider);
router.put("/service-providers/:id", authMiddleware, updateServiceProvider);
router.delete("/service-providers/:id", deleteServiceProvider);

export default router;
