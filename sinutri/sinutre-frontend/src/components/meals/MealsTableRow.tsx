import { DotsThree } from '@phosphor-icons/react';
import { MEAL_CATEGORY_BY_ID } from '@/constants/mealCategories';
import type { Meal } from '@/types/mealSummary';
import { formatDate } from '@/utils/date';

interface MealsTableRowProps {
  meal: Meal;
  onActionClick?: (meal: Meal, action: 'edit' | 'delete') => void;
}

export function MealsTableRow({ meal, onActionClick }: MealsTableRowProps) {
  const category = MEAL_CATEGORY_BY_ID[meal.type];

  return (
    <tr className="hover">
      <td className="text-center font-bold text-base-content/60">{meal.id}</td>
      <td className="font-medium">{meal.name}</td>
      <td className="font-medium">{formatDate(meal.eatTime)}</td>
      <td className="font-semibold">{category.label}</td>
      <td>
        <span className="badge badge-primary badge-outline">
          {meal.totals.calories} kcal
        </span>
      </td>
      <td className="text-center">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-sm btn-ghost btn-square m-1">
            <DotsThree size={20} />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-sm bg-base-100 rounded-box w-32 border border-base-200">
            <li><a onClick={() => onActionClick?.(meal, 'edit')}>Editar</a></li>
            <li><a className="text-error" onClick={() => onActionClick?.(meal, 'delete')}>Excluir</a></li>
          </ul>
        </div>
      </td>
    </tr>
  );
}
