import {Base} from "../base";

export class Basics extends Base {
    echo(message: string): Promise<Object> {
        return this.request('/echo', {
            method: "POST",
            body: this.prepareBody( {
                mess: message
            })
        });
    }

    default(): Promise<Object> {
        return this.request('/');
    }

    listCategories(): Promise<Object> {
        return this.request('/structure');
    }
}