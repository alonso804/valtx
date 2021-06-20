import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";
import dotenv from "dotenv";

import { createRoles } from "./libs/initialSetup";

import authRoutes from "./routes/authRoutes";

const app = express();
dotenv.config();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/auth", authRoutes);

export default app;
