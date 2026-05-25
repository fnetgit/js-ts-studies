import { Router } from 'express'
import { createMeal, getMealById, listMeals, updateMeal } from '../controllers/mealsController.js'

const router = Router()

router.get('/meals', listMeals)
router.get('/meals/:id', getMealById)
router.post('/meals', createMeal)
router.put('/meals/:id', updateMeal)

export { router }
