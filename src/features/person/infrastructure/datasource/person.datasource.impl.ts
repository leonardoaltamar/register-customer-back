import { prisma } from '../../../../data/mysql/index';
import { PersonDatasource } from '../../domain/datasource/person.datasource';
import { PersonEntity } from '../../domain/entity/person.entity';

export class PersonDatasourceImpl implements PersonDatasource {

    async create(person: PersonEntity): Promise<PersonEntity> {
        try {
            const personCreate = await prisma.persons.create({
                data: {
                    first_name: person.firstName,
                    second_name: person.secondName,
                    surname: person.surname,
                    second_surname: person.secondSurname,
                    document_number: person.documentNumber,
                    birthdate: new Date(person.birthdate),
                    expedition_date: new Date(person.expeditionDate),
                    document_type_id: person.documentTypeId,
                }
            })

            console.log(personCreate);

            return PersonEntity.formObject(personCreate);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}