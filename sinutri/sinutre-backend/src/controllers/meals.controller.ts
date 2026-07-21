import { Request, Response } from 'express';
import { prisma } from '../prisma';

export async function meals(
  req: Request,
  res: Response,
) {
  const meals = await prisma.meal.findMany({
    where: {
      userId: req.userId,
    },

    include: {
      foods: {
        include: {
          food: true,
        },
      },
    },

    orderBy: {
      createdAt: 'desc',
    },
  });

  const result = meals.map((meal) => {
    const totals = meal.foods.reduce(
      (acc, item) => {
        const factor = item.foodG / 100;

        acc.grams += item.foodG;

        acc.calories +=
          item.food.caloriesPer100g *
          factor;

        acc.carbs +=
          item.food.carbsPer100g *
          factor;

        acc.proteins +=
          item.food.proteinPer100g *
          factor;

        acc.fats +=
          item.food.fatPer100g *
          factor;

        return acc;
      },
      {
        grams: 0,
        calories: 0,
        carbs: 0,
        proteins: 0,
        fats: 0,
      },
    );

    return {
      id: meal.id,
      name: meal.description,
      type: meal.type,
      createdAt: meal.createdAt,
      eatTime: meal.eatTime,

      totals,

      items: meal.foods,
    };
  });

  return res.json(result);
}

export async function createMeal(
  req: Request,
  res: Response,
) {
  const userId = req.userId!;

  const {
    type,
    eatTime,
    description,
    items,
  } = req.body;

  const meal = await prisma.$transaction(
    async (tx) => {
      // Busca os alimentos envolvidos
      const foods = await tx.food.findMany({
        where: {
          id: {
            in: items.map(
              (i: { foodId: number }) =>
                i.foodId,
            ),
          },

          userId,
        },
      });

      if (foods.length !== items.length) {
        throw new Error(
          'Alimento não encontrado',
        );
      }

      // Cria a refeição
      const meal = await tx.meal.create({
        data: {
          type,
          eatTime: new Date(eatTime),
          description,
          userId,
        },
      });

      // Cria MealFood
      await tx.mealFood.createMany({
        data: items.map(
          (
            item: {
              foodId: number;
              grams: number;
            },
          ) => {
            const food = foods.find(
              (f) => f.id === item.foodId,
            )!;

            return {
              mealId: meal.id,

              foodId: food.id,

              foodG: item.grams,

              calories:
                (food.caloriesPer100g *
                  item.grams) /
                100,

              carbs:
                (food.carbsPer100g *
                  item.grams) /
                100,

              protein:
                (food.proteinPer100g *
                  item.grams) /
                100,

              fat:
                (food.fatPer100g *
                  item.grams) /
                100,
            };
          },
        ),
      });

      return meal;
    },
  );

  return res.status(201).json(meal);
}

export async function deleteMeal(req: Request, res: Response) {
  const userId = req.userId!;
  const mealId = parseInt(req.params.id);

  const meal = await prisma.meal.findUnique({
    where: { id: mealId },
  });

  if (!meal || meal.userId !== userId) {
    return res.status(404).json({ error: 'Refeição não encontrada' });
  }

  await prisma.mealFood.deleteMany({
    where: { mealId },
  });

  await prisma.meal.delete({
    where: { id: mealId },
  });

  return res.status(204).send();
}

export async function updateMeal(req: Request, res: Response) {
  const userId = req.userId!;
  const mealId = parseInt(req.params.id);

  const { type, eatTime, description, items } = req.body;

  const existingMeal = await prisma.meal.findUnique({
    where: { id: mealId },
  });

  if (!existingMeal || existingMeal.userId !== userId) {
    return res.status(404).json({ error: 'Refeição não encontrada' });
  }

  const meal = await prisma.$transaction(async (tx) => {
    const foods = await tx.food.findMany({
      where: {
        id: { in: items.map((i: { foodId: number }) => i.foodId) },
        userId,
      },
    });

    if (foods.length !== items.length) {
      throw new Error('Alimento não encontrado');
    }

    // Update meal
    const updatedMeal = await tx.meal.update({
      where: { id: mealId },
      data: {
        type,
        eatTime: new Date(eatTime),
        description,
      },
    });

    // Delete old items
    await tx.mealFood.deleteMany({
      where: { mealId },
    });

    // Insert new items
    await tx.mealFood.createMany({
      data: items.map((item: { foodId: number; grams: number }) => {
        const food = foods.find((f) => f.id === item.foodId)!;
        return {
          mealId: mealId,
          foodId: food.id,
          foodG: item.grams,
          calories: (food.caloriesPer100g * item.grams) / 100,
          carbs: (food.carbsPer100g * item.grams) / 100,
          protein: (food.proteinPer100g * item.grams) / 100,
          fat: (food.fatPer100g * item.grams) / 100,
        };
      }),
    });

    return updatedMeal;
  });

  return res.json(meal);
}

