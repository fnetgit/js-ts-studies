import { Request, Response } from 'express';
import { prisma } from '../prisma';

export async function getFoods(req: Request, res: Response) {
  const search = String(req.query.search ?? '');
  const foods = await prisma.food.findMany({
    where: {
      userId: req.userId!,
      name: {
        contains: search,
      }
    },
    take: 10,
    orderBy: {
      name: 'asc',
    },
  });

  return res.json(foods);
}

export async function createFood(req: Request, res: Response) {
  const {
    name,
    caloriesPer100g,
    carbsPer100g,
    proteinPer100g,
    fatPer100g,
  } = req.body;

  const food = await prisma.food.create({
    data: {
      name,
      caloriesPer100g,
      carbsPer100g,
      proteinPer100g,
      fatPer100g,
      userId: req.userId!,
    },
  });

  return res.status(201).json(food);
}

export async function updateFood(req: Request, res: Response) {
  const { id } = req.params;
  const {
    name,
    caloriesPer100g,
    carbsPer100g,
    proteinPer100g,
    fatPer100g,
  } = req.body;

  // Verify if food belongs to the user
  const existingFood = await prisma.food.findFirst({
    where: {
      id: Number(id),
      userId: req.userId!
    }
  });

  if (!existingFood) {
    return res.status(404).json({ error: 'Food not found or does not belong to user.' });
  }

  const updatedFood = await prisma.food.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      caloriesPer100g,
      carbsPer100g,
      proteinPer100g,
      fatPer100g,
    },
  });

  return res.status(200).json(updatedFood);
}

export async function deleteFood(req: Request, res: Response) {
  const { id } = req.params;

  const existingFood = await prisma.food.findFirst({
    where: {
      id: Number(id),
    }
  });

  if (!existingFood) {
    return res.status(404).json({ error: 'Food not found.' });
  }

  if (existingFood.userId !== req.userId) {
    return res.status(403).json({ error: 'Forbidden: You do not own this food item.' });
  }

  await prisma.food.delete({
    where: {
      id: Number(id),
    }
  });

  return res.status(204).send();
}
