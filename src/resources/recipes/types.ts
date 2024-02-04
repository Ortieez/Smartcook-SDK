export enum DishCategory {
  BREAKFAST = 1,
  SOUP = 2,
  MAINCOURSE = 3,
  DESSERT = 4,
  DINNER = 5,
}

export enum RecipeCategory {
  SOUP = 1,
  MEAT = 2,
  MEATFREE = 3,
  DESSERT = 4,
  SAUCE = 5,
  PASTA = 6,
  SALAD = 7,
  SWEETFOOD = 8,
  DRINK = 9,
}

export enum Difficulty {
  SIMPLE = 1,
  MEDIUM = 2,
  DIFFICULT = 3,
}

export enum Price {
  CHEAP = 1,
  MEDIUM = 2,
  EXPENSIVE = 3,
}

export enum Unit {
  LITER = "l",
  GRAM = "g",
  PIECE = "pc",
}

export enum Tolerance {
  VEGETARIAN = 1,
  VEGAN = 2,
  NUTS = 3,
  GLUTEN = 4,
  LACTOSE = 5,
  SPICY = 6,
  ALCOHOL = 7,
  SEAFOOD = 8,
  MUSHROOMS = 9,
}

export enum Necessary {
  YES = '1',
  NO = '0'
}

export enum Filter {
  AUTHOR = 'author',
  DISH_CATEGORY = 'dish_category',
  RECIPE_CATEGORY = 'recipe_category',
  DIFFICULTY = 'difficulty',
  PRICE = 'price',
  TOLERANCE = 'tolerance',
  INGREDIENT = 'ingredient',
}

export type FilterParams = {
  author?: string[]
  dish_category?: DishCategory[],
  recipe_category?: RecipeCategory[],
  difficulty?: Difficulty[],
  price?: Price[],
  tolerance?: Tolerance[],
  ingredient?: number[]
};

export enum Attribute {
  ID = 'id',
  NAME = 'name',
  DIFFICULTY = 'difficulty',
  DURATION = 'duration',
  PRICE = 'price',
  DESCRIPTION = 'description',
  COUNTRY = 'country',
  DISH_CATEGORY = 'dish_category',
  RECIPE_CATEGORY = 'recipe_category',
  TOLERANCE = 'tolerance',
  INGREDIENT = 'ingredient',
  AUTHOR = 'author',
}