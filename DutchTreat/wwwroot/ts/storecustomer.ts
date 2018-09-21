
class StoreCustomer {

    public visits: number = 0;
    private ourName: string;

    constructor(private firstName: string, private lastName: string) {}

    set name(value) {
        this.ourName = value;
    }

    get name() {
        return this.ourName;
    }

    public showName() {
        alert(this.firstName);
    }
}
