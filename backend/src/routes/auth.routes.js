import { Router } from "express";
import { signup } from "../controllers/auth.controller";

const router = Router();

router.get("/signin", (req, res) => {
  res.json("I am in login");
});

router.post("/signup", signup);

export default router;
