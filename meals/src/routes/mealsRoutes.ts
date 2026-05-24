import { Router } from 'express'
import { createMeal, listMeals } from '../controllers/mealsController.js'

const router = Router()

router.get('/meals', listMeals)
router.post('/meals', createMeal)

export { router }
