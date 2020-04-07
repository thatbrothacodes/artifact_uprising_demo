export default class User {
    readonly id?: string = undefined;
    email: string;
    firstName: string;
    middleName?: string;
    lastName: string;

    constructor(id: string, email: string, first: string, middle: string | undefined = undefined, last: string) {
        this.id = id;
        this.email = email;
        this.firstName = first;
        this.middleName = middle;
        this.lastName = last;
    }
}
