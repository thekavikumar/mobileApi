import express from "express";
import { getUser, getUserByMail } from "../controllers/users.js";

const router = express.Router();
router.post("/get", getUser);
router.post("/getuser", getUserByMail);
export default router;
