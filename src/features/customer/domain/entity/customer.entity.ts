export class CustomerEntity {
    constructor(
        public personId: number,
        public createdAt?: Date,
        public updatedAt?: Date,
        public deletedAt?: Date
    ) {

    }

    static formObject(object: { [key: string]: any }) {
        const { personId, createdAt, updatedAt, deletedAt } = object;
        if (!personId) throw `Person ID is required`;
        return new CustomerEntity(personId, createdAt, updatedAt, deletedAt);
    }


}