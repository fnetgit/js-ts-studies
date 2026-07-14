import express, { type Express } from "express";
import cors from "cors";
import { env } from "./config/env.js";

export const app: Express = express();

app.use(cors({ origin: env.frontendUrl, credentials: true }));

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
