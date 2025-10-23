import { PersonEntity } from "../../domain/entity/person.entity";
import { PersonRepository } from "../../domain/repository/person.repository";

export class PersonService {
    constructor(private repository: PersonRepository) {

    }

    public create = async (gender: PersonEntity) => {
        return await this.repository.create(gender);
    }

}