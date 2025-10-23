import { PersonDatasource } from "../../domain/datasource/person.datasource";
import { PersonEntity } from "../../domain/entity/person.entity";
import { PersonRepository } from "../../domain/repository/person.repository";

export class PersonRepositoryImpl implements PersonRepository {


    constructor(private readonly datasource: PersonDatasource) { }

    create(person: PersonEntity): Promise<PersonEntity> {
        return this.datasource.create(person);

    }

}