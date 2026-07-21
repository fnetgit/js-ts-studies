import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.middleware';
import { getFoods, createFood, updateFood, deleteFood } from '../controllers/food.controller';
import { validate } from '../middlewares/validation.middleware';
import { foodSchema } from '../schemas/food.schema';

export const foodRouter = Router();

foodRouter.get('/', requireAuth, getFoods);
foodRouter.post('/', requireAuth, validate(foodSchema), createFood);
foodRouter.put('/:id', requireAuth, validate(foodSchema), updateFood);
foodRouter.delete('/:id', requireAuth, deleteFood);
