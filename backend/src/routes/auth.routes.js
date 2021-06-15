import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller";
import {
  checkDuplicateUsername,
  checkDuplicateEmail,
} from "../middlewares/verifySignUp";

const router = Router();

router.post("/signin", signin);

router.post("/signup", checkDuplicateUsername, checkDuplicateEmail, signup);

export default router;
