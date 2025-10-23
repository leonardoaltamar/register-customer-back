export class PersonEntity {
    constructor(
        public id: number,
        public firstName: string,
        public secondName: string,
        public surname: string,
        public secondSurname: string,
        public documentTypeId: number,
        public documentNumer: string,
        public expeditionDate: Date,
        public birthdate: Date,
        public created_at?: Date,
        public updated_at?: Date,
        public deleted_at?: Date
    ) {

    }

    static formObject(object: { [key: string]: any }) {
        const { id, firstName, secondName, surname, secondSurname, documentTypeId, documentNumer, expeditionDate, birthdate, created_at, updated_at, deleted_at } = object;
        if (!id) throw `Id is required`;
        if (!firstName) throw `First Name is required`;
        if (!surname) throw `Surname is required`;
        if (!documentTypeId) throw `Document Type ID is required`;
        if (!documentNumer) throw `Document Number is required`;
        if (!expeditionDate) throw `Expedition Date is required`;
        if (!birthdate) throw `Birthdate is required`;
        return new PersonEntity(id, firstName, secondName, surname, secondSurname, documentTypeId, documentNumer, expeditionDate, birthdate, created_at, updated_at, deleted_at);
    }


}