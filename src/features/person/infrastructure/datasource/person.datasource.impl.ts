import { prisma } from '../../../../data/mysql/index';
import { PersonDatasource } from '../../domain/datasource/person.datasource';
import { PersonEntity } from '../../domain/entity/person.entity';

export class PersonDatasourceImpl implements PersonDatasource {

    async create(person: PersonEntity): Promise<PersonEntity> {

        const personCreate = await prisma.persons.create({
            data: {
                first_name: person.firstName,
                second_name: person.secondName,
                surname: person.surname,
                second_surname: person.secondSurname,
                document_number: person.documentNumer,
                birthdate: person.birthdate,
                expedition_date: person.expeditionDate,
                document_type_id: person.documentTypeId,
            }
        })

        return PersonEntity.formObject(personCreate);
        /* throw new Error("Method not implemented."); */
    }


}