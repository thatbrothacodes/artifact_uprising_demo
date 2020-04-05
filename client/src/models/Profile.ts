export default class Profile {
    readonly id?: string = undefined;
    firstName: string;
    middleName?: string;
    lastName: string;

    constructor(id: string, first: string, middle: string | undefined = undefined, last: string) {
        this.id = id;
        this.firstName = first;
        this.middleName = middle;
        this.lastName = last;
    }
}
