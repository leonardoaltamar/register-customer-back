export class UserEntity {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public personId: number,
        public createdAt?: Date,
        public updatedAt?: Date,
        public deletedAt?: Date
    ) {

    }

    static formObject(object: { [key: string]: any }) {
        const { id, username, password, personId, createdAt, updatedAt, deletedAt } = object;
        if (!username) throw `Username is required`;
        if (!password) throw `Password is required`;
        if (!personId) throw `Person ID is required`;
        return new UserEntity(id, username, password, personId, createdAt, updatedAt, deletedAt);
    }


}