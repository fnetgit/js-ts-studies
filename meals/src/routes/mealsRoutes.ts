import { Router } from "express";
import { listMeals } from "../controllers/mealsController.js";

const router = Router()

router.get('/meals', listMeals)

export {router}