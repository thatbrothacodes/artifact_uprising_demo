import Service from './';
import { BillingAddress } from '../models';

export default class BillingAddressService extends Service<BillingAddress> {
    baseUrl: string = 'billingAddress';

    create = (): Promise<void> => {
        return super.create();
    }

    get = async (id: string): Promise<BillingAddress> => {
        return super.get(id);
    }

    update = (): Promise<void> => {
        return super.update();
    }
}