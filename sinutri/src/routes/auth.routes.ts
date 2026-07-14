import {Router} from "express";
import {
  redirectToGithub,
  githubCallback,
} from "../controllers/auth.controller.js";
export const authRoutes = Router();

authRoutes.get("/github", redirectToGithub);
authRoutes.get("/github/callback", githubCallback);