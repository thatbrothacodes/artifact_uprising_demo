export default class OrderItem {
    readonly orderId: string;
    readonly quantity: number;
    readonly productId: string;
    readonly description: string;
    readonly price: number;

    constructor({ quantity, productId, description, orderId, price }: OrderItem) {
        this.quantity = quantity;
        this.orderId = orderId;
        this.productId = productId;
        this.description = description;
        this.price = price;
    }
}