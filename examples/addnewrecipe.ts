import {Recipe} from "../src/resources/recipes/models/Recipe";
import {Ingredient, Necessary} from "../src/resources/recipes/models/Ingredient";
import {Config} from "../src/resources/base";
import {Recipes} from "../src/resources/recipes/recipes";

let config: Config = {
    userId: 34,
    secret: '628man'
};

let recipesClient = new Recipes(config);

let recipe = new Recipe(
    'Earl Greys',
    1,
    '5',
    1,
    'We will prepare a cup for tea. Bring 250 ml of water to a boil. Place the tea bag in a cup and pour hot water over it. Leave to infuse for 3 minutes. Take out the bag and serve to drink. The tea can be sweetened with sugar or softened with milk according to taste.',
    'uk',
    [1, 5],
    [9],
    [1],
    [new Ingredient('water', 0.25, 'l', Necessary.no)],
    'Lipert Adam Pavel'
)

recipesClient.addNewRecipe(
    recipe).then(data => console.log(data))
