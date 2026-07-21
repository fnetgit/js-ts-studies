import { Request, Response } from 'express';
import { prisma } from '../prisma';

export async function getMetricsSummary(req: Request, res: Response) {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    include: {
      weightLogs: { orderBy: { createdAt: 'desc' }, take: 1 },
      healthData: { where: { isActive: true }, orderBy: { createdAt: 'desc' }, take: 1 },
    }
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const currentWeight = user.weightLogs[0]?.weight || null;
  const currentHeight = user.weightLogs[0]?.height || null;
  const currentTargetDietDaily = user.healthData[0]?.targetDietDaily || 2000;

  // 1. BMI (IMC) Calculation
  let imc = null;
  let imcClassification = null;
  if (currentWeight && currentHeight) {
    const heightInMeters = currentHeight / 100;
    imc = currentWeight / (heightInMeters * heightInMeters);

    if (imc < 18.5) {
      imcClassification = 'Abaixo do peso';
    } else if (imc < 24.9) {
      imcClassification = 'Peso ideal';
    } else if (imc < 29.9) {
      imcClassification = 'Sobrepeso';
    } else {
      imcClassification = 'Obesidade';
    }
  }

  // 2. 7-Day History Average
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const recentMeals = await prisma.meal.findMany({
    where: {
      userId: req.userId,
      eatTime: {
        gte: sevenDaysAgo,
      },
    },
    include: {
      foods: true,
    },
  });

  let totalCalories7Days = 0;
  recentMeals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalCalories7Days += food.calories;
    });
  });

  const averageCalories7Days = totalCalories7Days / 7;

  // 3. Today's calorie limit
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let todayCalories = 0;
  recentMeals.filter((meal) => meal.eatTime >= today).forEach((meal) => {
    meal.foods.forEach((food) => {
      todayCalories += food.calories;
    });
  });

  const isOverDailyLimit = todayCalories > currentTargetDietDaily;

  return res.json({
    imc: imc ? parseFloat(imc.toFixed(2)) : null,
    imcClassification,
    averageCalories7Days: parseFloat(averageCalories7Days.toFixed(2)),
    targetDietDaily: currentTargetDietDaily,
    isOverDailyLimit,
    todayCalories: parseFloat(todayCalories.toFixed(2)),
  });
}
