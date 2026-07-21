import { DotsThreeVertical } from '@phosphor-icons/react';
import { MEAL_CATEGORY_BY_ID } from '@/constants/mealCategories';
import type { Meal } from '@/types/mealSummary';
import { formatDate } from '@/utils/date';

interface MealListItemProps {
  meal: Meal;
  onActionClick?: (meal: Meal, action: 'edit' | 'delete') => void;
}

export function MealListItem({ meal, onActionClick }: MealListItemProps) {
  const category = MEAL_CATEGORY_BY_ID[meal.type];
  const Icon = category.Icon;

  return (
    <article className="card card-side bg-base-100 shadow-sm border border-base-200">
      <div className="card-body p-4 flex-row items-center gap-4 relative overflow-visible">
        <div className="bg-primary/10 text-primary rounded-full p-2">
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">{category.label}</p>
          <p className="font-semibold text-sm">{meal.name}</p>
          <p className="text-xs text-base-content/50">{formatDate(meal.eatTime)}</p>
        </div>
        <span className="badge badge-primary badge-outline badge-sm">
          {meal.totals.calories} kcal
        </span>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-sm btn-square m-1">
            <DotsThreeVertical size={18} />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-sm bg-base-100 rounded-box w-32 border border-base-200">
            <li><a onClick={() => onActionClick?.(meal, 'edit')}>Editar</a></li>
            <li><a className="text-error" onClick={() => onActionClick?.(meal, 'delete')}>Excluir</a></li>
          </ul>
        </div>
      </div>
    </article>
  );
}
