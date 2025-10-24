export class PersonEntity {
    constructor(
        public id: number,
        public firstName: string,
        public secondName: string,
        public surname: string,
        public secondSurname: string,
        public documentTypeId: number,
        public documentNumber: string,
        public expeditionDate: Date,
        public birthdate: Date,
        public created_at?: Date,
        public updated_at?: Date,
        public deleted_at?: Date
    ) {

    }

    static formObject(object: { [key: string]: any }) {
        const { id, first_name, second_name, surname, second_surname, document_type_id, document_number, expedition_date, birthdate, created_at, updated_at, deleted_at } = object;
        if (!id) throw `Id is required`;
        if (!first_name) throw `First Name is required`;
        if (!surname) throw `Surname is required`;
        if (!document_type_id) throw `Document Type ID is required`;
        if (!document_number) throw `Document Number is required`;
        if (!expedition_date) throw `Expedition Date is required`;
        if (!birthdate) throw `Birthdate is required`;
        return new PersonEntity(id, first_name, second_name, surname, second_surname, document_type_id, document_number, expedition_date, birthdate, created_at, updated_at, deleted_at);
    }


}