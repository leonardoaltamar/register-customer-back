import { PersonEntity } from "../../../person/domain/entity/person.entity";

export class CustomerEntity {
    constructor(
        public personId: number,
        public person: PersonEntity,
        public id?: number,
        public createdAt?: Date,
        public updatedAt?: Date,
        public deletedAt?: Date,
        public ticketsCount?: number
    ) {

    }

    static formObject(object: { [key: string]: any }) {
        const personId = object.personId ?? object.person_id;
        const createdAt = object.createdAt ?? object.created_at;
        const updatedAt = object.updatedAt ?? object.updated_at;
        const deletedAt = object.deletedAt ?? object.deleted_at;
        const person = object.person ?? object.persons;
        const ticketsCount = object.ticketsCount ?? object.tickets_count;
        const id = object.id ?? object.id;

        if (personId === undefined || personId === null) throw `Person ID is required`;
        return new CustomerEntity(personId, person, id,createdAt, updatedAt, deletedAt, ticketsCount);
    }


}