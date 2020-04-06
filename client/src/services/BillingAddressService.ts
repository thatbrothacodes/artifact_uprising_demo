import { Service } from './';
import { BillingAddress } from '../models';

export default class BillingAddressService extends Service<BillingAddress> {
    baseUrl: string = 'billingAddress';
}
