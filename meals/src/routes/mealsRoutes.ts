import { Router } from 'express'
import { createMeal, getMealById, listMeals, updateMeal, patchMeal } from '../controllers/mealsController.js'

const router = Router()

router.get('/meals', listMeals)
router.get('/meals/:id', getMealById)
router.post('/meals', createMeal)
router.put('/meals/:id', updateMeal)
router.patch('/meals/:id', patchMeal)

export { router }
