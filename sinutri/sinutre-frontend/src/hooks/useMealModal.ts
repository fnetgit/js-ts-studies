import { useCallback, useState } from 'react';
import type { MealCategory } from '@/types/meal';
import type { Meal } from '@/types/mealSummary';

export function useMealModal() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<MealCategory | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const openWith = useCallback((category: MealCategory) => {
    setSelectedCategory(category);
    setSelectedMeal(null);
    setOpen(true);
  }, []);

  const openEdit = useCallback((meal: Meal) => {
    setSelectedCategory(meal.type as MealCategory);
    setSelectedMeal(meal);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setSelectedCategory(null);
    setSelectedMeal(null);
  }, []);

  return { open, selectedCategory, selectedMeal, openWith, openEdit, close };
}
