import {Config} from "./resources/base";
import {Basics} from "./resources/basics/basics";

let config: Config = {
    userId: 34,
    secret: "628man"
};

let basics = new Basics(config);
basics.echo("Ahojda").then(() => console.log("[ECHO] Success"));
basics.default().then(() => console.log("[DEFAULT] Success"));
basics.listCategories().then(() => console.log("[CATEGORIES] Success"));

