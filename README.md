# SmartCook SDK Documentation

The SmartCook SDK provides a set of functions to interact with the SmartCook API. This SDK allows you to perform various actions, such as echoing a message, retrieving a list of categories, adding new recipes, and validating recipes.

## SDK Functions

### `Smartcook` Class

The main class of the SDK is `Smartcook`, which encapsulates the basic and recipe-related functionalities. It requires an object as a parameter with the following properties:

- `baseUrl` (optional): The base URL for the SmartCook API. Defaults to "https://www.smartcook-project.eu/api". Added because the URL can be changed in the future by the API owner, or you want to test it on your local server.
- `userId`: The user ID used for authentication.
- `secret`: The secret key used for generating signatures.

#### Example:

```javascript
const smartCookSDK = new Smartcook({
  baseUrl: "https://www.smartcook-project.eu/api",
  userId: "your_user_id",
  secret: "your_secret_key"
});
```

### Basic Functions

#### `echo(mess: string): Promise<EchoResponse | ErrorResponse>`

Echoes a message to the SmartCook API.

##### Example:

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
smartCookSDK.recipes.removeRecipe(3)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### `Recipes` and `Ingredient` class
To use the `Recipes` and `Ingredients` classes in the SmartCook SDK, you can follow the examples below. These examples demonstrate how to create instances of the classes, populate them with data, and then use them with the SDK functions.

```javascript
const ingredient1 = new Ingredient("Tomato", 2, "pc", Necessary.yes, "Ripe and red");
const ingredient2 = new Ingredient("Onion", 1, "pc", Necessary.yes, "White");

const recipeData = new Recipe(
    "Spaghetti",                // Name
    2,                          // Difficulty
    "30",                       // Duration
    5,                          // Price
    "Abcdefgh",                 // Description
    "cs",                       // Country (ISO 3166 alpha-2)
    [1, 2],                     // Dish category
    [9],                        // Recipe Category
    [1],                        // Tolerance
    [ingredient1, ingredient2], // Ingredient/s
    "Adam Lipert"               // Author (has to be the same name as name in database
);
```

### TODO:

- [ ] Create an Enum for Dish category, Recipe Category, Tolerance, Difficulty, Unit, Price (for easier use in programming)
- [ ] Fix all missing imports
- [ ] Add function to map an object to recipe alongside the standard use