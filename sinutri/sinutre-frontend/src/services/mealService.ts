import { api } from '@/lib/api';
import type { MealState } from '@/types/meal';

interface CreateMealPayload extends MealState {
  items: Array<{
    foodId: number;
    grams: number;
  }>;
}

export async function createMeal(
  payload: CreateMealPayload,
) {
  const response = await api.post(
    '/meals',
    payload,
  );

  return response.data;
}

export async function updateMeal(id: number, payload: CreateMealPayload) {
  const response = await api.put(`/meals/${id}`, payload);
  return response.data;
}

export async function deleteMeal(id: number) {
  const response = await api.delete(`/meals/${id}`);
  return response.data;
}