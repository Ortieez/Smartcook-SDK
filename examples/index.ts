import {
    Attribute,
    Difficulty,
    DishCategory,
    Ingredient,
    Necessary,
    Price,
    Recipe,
    RecipeCategory,
    Smartcook,
    Status,
    Tolerance,
    Unit
} from "../dist";
import config from "../example.config.json";

// Instantiate a new client with the given configuration
let client = new Smartcook(config);

// Define a new recipe
let recipe = new Recipe({
    name: "test",
    difficulty: Difficulty.MEDIUM,
    duration: "2",
    price: Price.MEDIUM,
    description: "description",
    country: "cs",
    dishCategory: [DishCategory.BREAKFAST],
    recipeCategory: [RecipeCategory.MEAT, RecipeCategory.DRINK],
    tolerance: [Tolerance.ALCOHOL, Tolerance.GLUTEN],
    ingredients: [
        new Ingredient({
            name: "Ingredient 1",
            quantity: 2,
            unit: Unit.PIECE,
            necessary: Necessary.NO,
            comment: "ahoj",
        }),
    ],
    author: client.authorName,
});

// Define the search parameters for the API
let filters = client.recipes.createFilters({
    author: ['Test User'],
});

// Define the attributes to retrieve from the API response
let attributes = [Attribute.ID, Attribute.AUTHOR];

// Fetch and log the recipes from the API
client.recipes.getRecipes(attributes, filters)
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Fetch and log a recipe by ID from the API
client.recipes.getRecipeById(1)
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Validate the recipe, if validated add it
client.recipes.validateRecipe(recipe)
    .then(data => {
        console.log(data);
        if (data.stat == Status.OK) {
            client.recipes.addNewRecipe(recipe)
                .then(response  => console.log(response));
        }
    })
    .catch(error => console.error(error));

// List and log the categories
client.recipes.listCategories()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Echo test
client.basics.echo("ahoj")
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Test the default basics
client.basics.default()
    .then(data => console.log(data))
    .catch(error => console.error(error));