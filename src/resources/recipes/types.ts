import { Status } from '../basics/types';

export type RecipeCategoryKey = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type DishCategoryKey = 1 | 2 | 3 | 4 | 5;
export type DifficultyKey = 1 | 2 | 3;
export type PriceKey = 1 | 2 | 3;
export type UnitKey = 'l' | 'g' | 'pc';
export type ToleranceKey = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type DishCategory = Record<DishCategoryKey, string>;
export type RecipeCategory = Record<RecipeCategoryKey, string>;
export type Difficulty = Record<DifficultyKey, string>;
export type Price = Record<PriceKey, string>;
export type Unit = Record<UnitKey, string>;
export type Tolerance = Record<ToleranceKey, string>;

export type Data = {
  dish_category: DishCategory;
  recipe_category: RecipeCategory;
  difficulty: Difficulty;
  price: Price;
  unit: Unit;
  tolerance: Tolerance;
};

export type CategoriesResponse = {
  stat: Status.ok;
  data: Data;
  user: number;
  time: number;
  sign: string;
};
