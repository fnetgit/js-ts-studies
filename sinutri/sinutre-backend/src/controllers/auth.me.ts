import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { z } from 'zod';

const updateProfileSchema = z.object({
  gender: z.string().optional(),
  height: z.number().positive().optional(),
  weight: z.number().positive().optional(),
  targetDietDaily: z.number().positive().optional(),
  activityLevel: z.string().optional(),
  goal: z.string().optional(),
});

export async function me(
  req: Request,
  res: Response,
) {
  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
    include: {
      weightLogs: { orderBy: { createdAt: 'desc' }, take: 1 },
      healthData: { where: { isActive: true }, orderBy: { createdAt: 'desc' }, take: 1 },
    }
  });

  if (!user) return res.status(404).json({ error: 'User not found' });

  return res.json({
    id: user.id,
    githubLogin: user.githubLogin,
    name: user.name,
    avatarUrl: user.avatarUrl,
    gender: user.gender,
    height: user.weightLogs[0]?.height || null,
    weight: user.weightLogs[0]?.weight || null,
    activityLevel: user.healthData[0]?.levelActivity || null,
    targetDietDaily: user.healthData[0]?.targetDietDaily || null,
  });
}

export async function updateProfile(req: Request, res: Response) {
  const parseResult = updateProfileSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: parseResult.error.issues });
  }

  const { height, weight, gender, activityLevel, targetDietDaily } = parseResult.data;
  const userId = Number(req.userId);

  // 1. Update gender in User
  if (gender) {
    await prisma.user.update({
      where: { id: userId },
      data: { gender },
    });
  }

  // 2. Insert new WeightLog
  if (height !== undefined && weight !== undefined) {
    await prisma.weightLog.create({
      data: {
        userId: userId,
        height,
        weight,
      },
    });
  }

  // 3. Insert new HealthData
  if (activityLevel !== undefined && targetDietDaily !== undefined) {
    // Inactive existing ones
    await prisma.healthData.updateMany({
      where: { userId: userId, isActive: true },
      data: { isActive: false, closedAt: new Date() },
    });
    // Create new
    await prisma.healthData.create({
      data: {
        userId: userId,
        levelActivity: activityLevel,
        targetDietDaily,
      },
    });
  }

  // return updated user structure
  const updatedUser = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      weightLogs: { orderBy: { createdAt: 'desc' }, take: 1 },
      healthData: { where: { isActive: true }, orderBy: { createdAt: 'desc' }, take: 1 },
    }
  });

  return res.json({
    id: updatedUser?.id,
    githubLogin: updatedUser?.githubLogin,
    name: updatedUser?.name,
    avatarUrl: updatedUser?.avatarUrl,
    gender: updatedUser?.gender,
    height: updatedUser?.weightLogs[0]?.height || null,
    weight: updatedUser?.weightLogs[0]?.weight || null,
    activityLevel: updatedUser?.healthData[0]?.levelActivity || null,
    targetDietDaily: updatedUser?.healthData[0]?.targetDietDaily || null,
  });
}