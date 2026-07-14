import express, { type Express } from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { authRoutes } from "./routes/auth.routes.js";

export const app: Express = express();

app.use(cors({ origin: env.frontendUrl, credentials: true }));

app.use(express.json());
app.use("/auth", authRoutes); 

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
