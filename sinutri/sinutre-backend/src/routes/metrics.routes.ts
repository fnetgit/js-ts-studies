import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.middleware';
import { getMetricsSummary } from '../controllers/metrics.controller';

export const metricsRouter = Router();

metricsRouter.get('/summary', requireAuth, getMetricsSummary);
