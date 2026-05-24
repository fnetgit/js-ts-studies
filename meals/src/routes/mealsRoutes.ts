import { Router } from 'express'
import { createMeal, getMealById, listMeals } from '../controllers/mealsController.js'

const router = Router()

router.get('/meals', listMeals)
router.get('/meals/:id', getMealById)
router.post('/meals', createMeal)

export { router }
