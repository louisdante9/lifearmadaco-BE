import express from "express";
import {
  getClients,
  getClientById,
  deleteClient,
} from "../controllers/ClientController.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/clients/:id", getClientById);
router.delete("/clients/:id", deleteClient);

export default router;
