import axios from 'axios';
import { Service } from './';
import { Product } from '../models';

export default class OrderService extends Service<Product> {
    baseUrl: string = 'products';

    findAll = (): Promise<Array<Product>> => {
        return axios.get(`${this.baseUrl}`);
    }
}
