import type { Meal } from "@/types/mealSummary";
import { MealsTableRow } from './MealsTableRow';

interface MealsTableProps {
  meals: Meal[];
  onActionClick?: (meal: Meal, action: 'edit' | 'delete') => void;
}

export function MealsTable({ meals, onActionClick }: MealsTableProps) {
  
  return (
    <section className="card bg-base-100 shadow-sm w-full hidden lg:block overflow-visible">
      <div className="overflow-visible">
        <table className="table table-zebra w-full text-base-content overflow-visible">
          <thead className="bg-base-200/70 text-base-content/60 uppercase text-xs">
            <tr>
              <th className="w-16 text-center">ID</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Categoria</th>
              <th>Total de Calorias</th>
              <th className="text-center">Ação</th>
            </tr>
          </thead>
          <tbody>
            {meals.map(meal => (
              <MealsTableRow
                key={meal.id}
                meal={meal}
                onActionClick={onActionClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
