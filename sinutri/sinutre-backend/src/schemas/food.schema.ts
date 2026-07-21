import { z } from 'zod';

export const foodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'O nome é obrigatório',
    }).min(1, 'O nome não pode ser vazio'),
    caloriesPer100g: z.number({
      required_error: 'Calorias são obrigatórias',
    }).min(0, 'As calorias não podem ser negativas'),
    carbsPer100g: z.number({
      required_error: 'Carboidratos são obrigatórios',
    }).min(0, 'Os carboidratos não podem ser negativos'),
    proteinPer100g: z.number({
      required_error: 'Proteínas são obrigatórias',
    }).min(0, 'As proteínas não podem ser negativas'),
    fatPer100g: z.number({
      required_error: 'Gorduras são obrigatórias',
    }).min(0, 'As gorduras não podem ser negativas'),
  }),
});
