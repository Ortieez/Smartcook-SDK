import {
    Difficulty,
    DishCategory,
    Ingredient,
    Necessary,
    Price,
    Recipe,
    RecipeCategory,
    Smartcook, Status,
    Tolerance,
    Unit,
    RecipeResponse
} from "../dist";
import config from "../ortieez.config.json";

let client = new Smartcook(config);
let recipe = new Recipe({
    name: "test",
    difficulty: Difficulty.Medium,
    duration: "2",
    price: Price.Medium,
    description: "description",
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
        new Ingredient({
            name: "Ingredient 1",
            quantity: 2,
            unit: Unit.Piece,
            necessary: Necessary.no,
            comment: "ahoj",
        }),
    ],
    author: client.authorName,
});

// client.recipes.getRecipes().then(data => console.log(data));
// client.recipes.getRecipeById(1).then(data => console.log(data))

// client.recipes.addNewRecipe(recipe).then(data => console.log(data));
// client.recipes.removeRecipe(5).then(data => console.log(data));
// client.recipes.validateRecipe(recipe).then(data => {
//     console.log(data)
//     if (data.stat == Status.ok) {
//         client.recipes.addNewRecipe(recipe).then((data: RecipeResponse)  => console.log(data));
//     }
// });
// client.recipes.listCategories().then(data => console.log(data));
// client.basics.echo("ahoj").then(data => console.log(data));
// client.basics.default().then(data => console.log(data));