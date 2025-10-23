import { PersonEntity } from "../entity/person.entity";


export abstract class PersonDatasource {

    abstract create(person: PersonEntity): Promise<PersonEntity>;

}