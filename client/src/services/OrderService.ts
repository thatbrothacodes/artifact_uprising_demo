import { Service } from './';
import { Order } from '../models';

export default class OrderService extends Service<Order> {
    baseUrl: string = 'orders';
}
