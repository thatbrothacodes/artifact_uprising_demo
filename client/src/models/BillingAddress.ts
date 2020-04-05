export default class BillingAddress {
    readonly id?: string = undefined;
    cardNumber: string;
    cvv?: string = undefined;
    isDefault: boolean;
    streetAddress: string;
    streetAddress2?: string;
    city: string;
    state: string;
    postalCode: string;
    expirationDate: string;
    readonly createDate?: Date;
    readonly modifiedDate?: Date;

    constructor({ id, isDefault, cardNumber, cvv, expirationDate, streetAddress, streetAddress2, city, createDate, modifiedDate, state, postalCode }: BillingAddress) {
        this.id = id;
        this.isDefault = isDefault;
        this.streetAddress = streetAddress;
        this.streetAddress2 = streetAddress2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expirationDate = expirationDate;
    }
}
