export default class ShippingAddress {
    readonly id?: string = undefined;
    isDefault: boolean;
    streetAddress: string;
    streetAddress2?: string;
    city: string;
    state: string;
    postalCode: string;
    readonly createDate?: Date;
    readonly modifiedDate?: Date;

    constructor({ id, isDefault, streetAddress, streetAddress2, city, createDate, modifiedDate, state, postalCode }: ShippingAddress) {
        this.id = id;
        this.isDefault = isDefault;
        this.streetAddress = streetAddress;
        this.streetAddress2 = streetAddress2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }
}
