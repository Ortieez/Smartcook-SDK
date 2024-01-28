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

## Adding Your Own Examples

Feel free to add your own examples based on the code provided. Simply instantiate the `Smartcook` class and use its methods as shown in the examples above.