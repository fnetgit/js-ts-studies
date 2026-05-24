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

export const getMealById = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const meal = meals.find((m) => m.id == id)
  if (!meal) {
    return res.status(404).json({ error: 'Refeição não encontrada' })
  }
  return res.status(200).json(meal)
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
