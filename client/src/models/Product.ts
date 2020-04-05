export default class Product {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly imageUrl: string;

    constructor({id, name, description, price, imageUrl}: Product) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
