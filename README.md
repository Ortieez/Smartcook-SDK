# SmartCook SDK Documentation

The SmartCook SDK provides a set of functions to interact with the SmartCook API. This SDK allows you to perform various actions, such as echoing a message, retrieving a list of categories, adding new recipes, and validating recipes.

## SDK Functions

### `Smartcook` Class

The main class of the SDK is `Smartcook`, which encapsulates the basic and recipe-related functionalities. It requires an object as a parameter with the following properties:

- `baseUrl` (optional): The base URL for the SmartCook API. Defaults to "https://www.smartcook-project.eu/api". Added because the URL can be changed in the future by the API owner, or you want to test it on your local server.
- `userId`: The user ID used for authentication.
- `secret`: The secret key used for generating signatures.
- `authorName`:  The author name of the recipe. It is required when creating a new recipe or updating an existing one.

#### Example:

```typescript
const smartCookSDK = new Smartcook({
  baseUrl: "https://www.smartcook-project.eu/api",
  userId: "your_user_id",
  secret: "your_secret_key",
  authorName: "your_author_name"
});
```

### Basic Functions

#### `echo(mess: string): Promise<EchoResponse | ErrorResponse>`

Echoes a message to the SmartCook API.

##### Example:

```typescript
smartCookSDK.basics.echo("Hello, SmartCook!")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

#### `default(): Promise<DefaultResponse | ErrorResponse>`

Sends an API call to test if the API is working and returns a default message by the API.

##### Example:

```typescript
smartCookSDK.basics.default()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### Recipe Functions

#### `listCategories(): Promise<CategoriesResponse | ErrorResponse>`

Retrieves a list of categories from the SmartCook API.

##### Example:

```typescript
smartCookSDK.recipes.listCategories()
  .then(categories => {
    console.log(categories);
  })
  .catch(error => {
    console.error(error);
  });
```

#### `addNewRecipe(data: any): Promise<ValidResponse | ErrorResponse>`

Adds a new recipe to the SmartCook API.

##### Example:

```typescript
const recipeData = new Recipe();

smartCookSDK.recipes.addNewRecipe(recipeData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

#### `validateRecipe(data: any): Promise<ValidResponse | ErrorResponse>`

Validates a recipe with the SmartCook API.

##### Example:

```typescript
const recipeData = new Recipe();

smartCookSDK.recipes.validateRecipe(recipeData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

#### `removeRecipe(recipeId: number): Promise<ValidResponse | ErrorResponse>`

Deletes a recipe from database using the SmartCook API.

##### Example:

```typescript
smartCookSDK.recipes.removeRecipe(3)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### Needed types for `Recipe` and `Ingredient` classes

#### DishCategory

```typescript
export enum DishCategory {
  Breakfast = 1,
  Soup = 2,
  MainCourse = 3,
  Dessert = 4,
  Dinner = 5,
}
```

#### RecipeCategory

```typescript
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
```

#### Difficulty

```typescript
export enum Difficulty {
  Simple = 1,
  Medium = 2,
  Difficult = 3,
}
```

#### Price

```typescript
export enum Price {
  Cheap = 1,
  Medium = 2,
  Expensive = 3,
}
```

#### Unit

```typescript
export enum Unit {
  Liter = "l",
  Gram = "g",
  Piece = "pc",
}
```
#### Tolerance

```typescript
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
```

#### Necessary

```typescript
export enum Necessary {
  yes = '1',
  no = '0'
}
```

### `Recipes` and `Ingredient` class
To use the `Recipes` and `Ingredients` classes in the SmartCook SDK, you can follow the examples below. These examples demonstrate how to create instances of the classes, populate them with data, and then use them with the SDK functions.

```typescript
const ingredient1 = new Ingredient("Tomato", 2, Unit.Piece, Necessary.yes, "Ripe and red");
const ingredient2 = new Ingredient("Onion", 1, Unit.Piece, Necessary.yes, "White");

const recipeData = new Recipe({
    name: "Recipe name",
    difficulty: Difficulty.Medium,
    duration: "2",
    price: Price.Medium,
    description: "Recipe description",
    country: "cs",
    dishCategory: [
        DishCategory.Breakfast
    ],
    recipeCategory: [
        RecipeCategory.Meat,
        RecipeCategory.Drink
    ],
    tolerance: [
        Tolerance.Alcohol,
        Tolerance.Gluten
    ],
    ingredients: [
        ingredient1,
        ingredient2
    ],
    author: client.authorName,
});
```