import { useState, useEffect } from 'react';
import { updateFood } from '@/services/foodService';
import type { Food } from '@/types/food';

interface EditFoodModalProps {
  modalId: string;
  food: Food | null;
  onUpdated: () => Promise<void> | void;
}

export function EditFoodModal({
  modalId,
  food,
  onUpdated,
}: EditFoodModalProps) {
  const [name, setName] = useState('');
  const [caloriesPer100g, setCaloriesPer100g] = useState('');
  const [carbsPer100g, setCarbsPer100g] = useState('');
  const [proteinPer100g, setProteinPer100g] = useState('');
  const [fatPer100g, setFatPer100g] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (food) {
      setName(food.name);
      setCaloriesPer100g(food.caloriesPer100g.toString());
      setCarbsPer100g(food.carbsPer100g.toString());
      setProteinPer100g(food.proteinPer100g.toString());
      setFatPer100g(food.fatPer100g.toString());
      setSubmitted(false);
    }
  }, [food]);

  const errors = {
    name: name.trim() === '' ? 'O nome é obrigatório' : '',
    calories: caloriesPer100g === '' || Number(caloriesPer100g) < 0 ? 'Insira um valor válido (mínimo 0)' : '',
    carbs: carbsPer100g === '' || Number(carbsPer100g) < 0 ? 'Insira um valor válido (mínimo 0)' : '',
    protein: proteinPer100g === '' || Number(proteinPer100g) < 0 ? 'Insira um valor válido (mínimo 0)' : '',
    fat: fatPer100g === '' || Number(fatPer100g) < 0 ? 'Insira um valor válido (mínimo 0)' : '',
  };

  const isFormValid = !errors.name && !errors.calories && !errors.carbs && !errors.protein && !errors.fat;

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    if (!food || !isFormValid) return;
    
    try {
      setLoading(true);

      await updateFood(food.id, {
        name,
        caloriesPer100g: Number(caloriesPer100g),
        carbsPer100g: Number(carbsPer100g),
        proteinPer100g: Number(proteinPer100g),
        fatPer100g: Number(fatPer100g),
      });

      await onUpdated();

      (document.getElementById(modalId) as HTMLDialogElement)?.close();
    } finally {
      setLoading(false);
    }
  }

  function handleCancel() {
    if (food) {
      setName(food.name);
      setCaloriesPer100g(food.caloriesPer100g.toString());
      setCarbsPer100g(food.carbsPer100g.toString());
      setProteinPer100g(food.proteinPer100g.toString());
      setFatPer100g(food.fatPer100g.toString());
    }
    setSubmitted(false);
    (document.getElementById(modalId) as HTMLDialogElement)?.close();
  }

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Editar alimento</h3>

        <form onSubmit={handleSave} className="space-y-3 mt-4" noValidate>
          <div>
            <input
              className={`input input-bordered w-full ${submitted && errors.name ? 'input-error' : ''}`}
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {submitted && errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="number"
              min="0"
              className={`input input-bordered w-full ${submitted && errors.calories ? 'input-error' : ''}`}
              placeholder="Calorias por 100g"
              value={caloriesPer100g}
              onChange={(e) => setCaloriesPer100g(e.target.value)}
              required
            />
            {submitted && errors.calories && <p className="text-error text-sm mt-1">{errors.calories}</p>}
          </div>

          <div>
            <input
              type="number"
              min="0"
              className={`input input-bordered w-full ${submitted && errors.carbs ? 'input-error' : ''}`}
              placeholder="Carboidratos por 100g"
              value={carbsPer100g}
              onChange={(e) => setCarbsPer100g(e.target.value)}
              required
            />
            {submitted && errors.carbs && <p className="text-error text-sm mt-1">{errors.carbs}</p>}
          </div>

          <div>
            <input
              type="number"
              min="0"
              className={`input input-bordered w-full ${submitted && errors.protein ? 'input-error' : ''}`}
              placeholder="Proteínas por 100g"
              value={proteinPer100g}
              onChange={(e) => setProteinPer100g(e.target.value)}
              required
            />
            {submitted && errors.protein && <p className="text-error text-sm mt-1">{errors.protein}</p>}
          </div>

          <div>
            <input
              type="number"
              min="0"
              className={`input input-bordered w-full ${submitted && errors.fat ? 'input-error' : ''}`}
              placeholder="Gorduras por 100g"
              value={fatPer100g}
              onChange={(e) => setFatPer100g(e.target.value)}
              required
            />
            {submitted && errors.fat && <p className="text-error text-sm mt-1">{errors.fat}</p>}
          </div>

          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={handleCancel}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || (submitted && !isFormValid)}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
