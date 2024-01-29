const { Smartcook, Recipe, Ingredient } = require("../dist")

let config = {

}

// const client = new Smartcook(config);
const earlGrey = new Recipe();
const ingreidnt = new Ingredient();

console.table(earlGrey)
console.table(ingreidnt)

// client.basics.echo("Ahoj").then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.error(error);
// });
//
// client.basics.default().then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.error(error);
// });
