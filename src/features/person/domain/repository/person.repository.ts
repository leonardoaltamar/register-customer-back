import { PersonEntity } from "../entity/person.entity";


export abstract class PersonRepository {

    abstract create(person: PersonEntity): Promise<PersonEntity>;

}