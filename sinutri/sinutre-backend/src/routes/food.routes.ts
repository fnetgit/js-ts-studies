import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.middleware';
import { getFoods, createFood, updateFood, deleteFood } from '../controllers/food.controller';

export const foodRouter = Router();

foodRouter.get('/', requireAuth, getFoods);
foodRouter.post('/', requireAuth, createFood);
foodRouter.put('/:id', requireAuth, updateFood);
foodRouter.delete('/:id', requireAuth, deleteFood);
