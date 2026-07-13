import express from "express";
import cors from "cors";
import type { Express } from "express";

export const app: Express = express();

app.use(cors({origin: "https://localhost:5173", credentials: true}));

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});