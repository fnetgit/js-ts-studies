import type { Request, Response } from 'express'

interface Meal {
  id: number
  name: string
  calories: number
  mealType: string
}

const meals: Meal[] = []
let nextId = 1

export const listMeals = (req: Request, res: Response) => {
  return res.status(200).json(meals)
}

export const createMeal = (req: Request, res: Response) => {
  const { name, calories, mealType } = req.body
  if (!name || !calories || !mealType) {
    return res.status(400).json({ error: 'Campos name, calories e mealType são obrigatórios' })
  }

  const newMeal: Meal = {
    id: nextId++,
    name,
    calories,
    mealType,
  }

  meals.push(newMeal)
  return res.status(201).json(newMeal)
}
