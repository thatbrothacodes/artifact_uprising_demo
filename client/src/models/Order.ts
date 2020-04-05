import OrderItem from './OrderItem';

export default class Order {
    readonly id: string;
    readonly items: Array<OrderItem>;
    readonly tip: number;
    readonly total: number;

    constructor({id, items, tip, total}: Order) {
        this.id = id;
        this.items = items;
        this.tip = tip;
        this.total = total;
    }
}
