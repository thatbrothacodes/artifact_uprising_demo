import { Service } from './';
import { ShippingAddress } from '../models';

export default class ShippingAddressService extends Service<ShippingAddress> {
    baseUrl: string = 'shippingAddress';
}
