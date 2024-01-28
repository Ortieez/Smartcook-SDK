const { Smartcook } = require("../dist")

let config = {

}

const client = new Smartcook(config);

client.basics.echo("Ahoj").then(response => {
    console.log(response);
})
.catch(error => {
    console.error(error);
});

client.basics.default().then(response => {
    console.log(response);
})
.catch(error => {
    console.error(error);
});
