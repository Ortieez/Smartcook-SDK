import { Status } from '../basics/types';

export enum DishCategory {
  Breakfast = 1,
  Soup = 2,
  MainCourse = 3,
  Dessert = 4,
  Dinner = 5,
}

export enum RecipeCategory {
  Soup = 1,
  Meat = 2,
  MeatFree = 3,
  Dessert = 4,
  Sauce = 5,
  Pasta = 6,
  Salad = 7,
  SweetFood = 8,
  Drink = 9,
}

export enum Difficulty {
  Simple = 1,
  Medium = 2,
  Difficult = 3,
}

export enum Price {
  Cheap = 1,
  Medium = 2,
  Expensive = 3,
}

export enum Unit {
  Liter = "l",
  Gram = "g",
  Piece = "pc",
}

export enum Tolerance {
  Vegetarian = 1,
  Vegan = 2,
  Nuts = 3,
  Gluten = 4,
  Lactose = 5,
  Spicy = 6,
  Alcohol = 7,
  SeaFood = 8,
  Mushrooms = 9,
}

export type CategoriesData = {
  dish_category: DishCategory[];
  recipe_category: RecipeCategory[];
  difficulty: Difficulty[];
  price: Price[];
  unit: Unit[];
  tolerance: Tolerance[];
};

export type CategoriesResponse = {
  stat: Status.ok;
  data: CategoriesData;
  user: number;
  time: number;
  sign: string;
};

export enum Necessary {
  yes = '1',
  no = '0'
}
