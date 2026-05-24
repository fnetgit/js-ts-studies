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
