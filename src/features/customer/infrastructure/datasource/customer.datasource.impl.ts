import { prisma } from '../../../../data/mysql/index';
import { PersonDatasource } from '../../../person/domain/datasource/person.datasource';
import { PersonDatasourceImpl } from '../../../person/infrastructure/datasource/person.datasource.impl';
import { CustomerDatasource } from '../../domain/datasource/customer.datasource';
import { CustomerEntity } from '../../domain/entity/customer.entity';


export class CustomerDatasourceImpl implements CustomerDatasource {

    async create(customer: CustomerEntity): Promise<CustomerEntity> {

        const personDataSource = new PersonDatasourceImpl();

        const personCreated = await personDataSource.create(customer.person);
        console.log(personCreated);

        const customerCreate = await prisma.customers.create({
            data: {
                person_id: personCreated.id
            }
        })

        return CustomerEntity.formObject(customerCreate);
        /* throw new Error("Method not implemented."); */
    }

    async getAll(offset?: number | undefined, limit?: number | undefined): Promise<CustomerEntity[]> {
        const customers = await prisma.customers.findMany({
            where: { deleted_at: null },
            include: {
                persons: {
                    include: {
                        users: {
                            include: {
                                _count: {
                                    select: { tickets: true }
                                }
                            }
                        }
                    }
                }
            },
            skip: offset,
            take: limit
        });

        return customers.map(c => {
            const person = c.persons ? {
                id: c.persons.id,
                firstName: c.persons.first_name,
                secondName: c.persons.second_name,
                surname: c.persons.surname,
                secondSurname: c.persons.second_surname,
                documentTypeId: c.persons.document_type_id,
                documentNumber: c.persons.document_number,
                expeditionDate: c.persons.expedition_date,
                birthdate: c.persons.birthdate,
                createdAt: c.persons.created_at,
                updatedAt: c.persons.updated_at
            } : undefined;

            let ticketsCount = 0;
            if (c.persons && Array.isArray(c.persons.users)) {
                for (const u of c.persons.users) {
                    ticketsCount += u._count?.tickets ?? 0;
                }
            }

            return CustomerEntity.formObject({
                personId: c.person_id,
                id: c.id,
                createdAt: c.created_at,
                updatedAt: c.updated_at,
                deletedAt: c.deleted_at,
                person,
                ticketsCount
            });
        });
    }

    async getById(id: number): Promise<CustomerEntity> {
        const customer = await prisma.customers.findFirst({
            where: { id }
        })

        return CustomerEntity.formObject(customer!);
    }

    async delete(id: number): Promise<void> {
        await prisma.customers.update({
            where: { id },
            data: { deleted_at: new Date() }
        });
    }

    async update(id: number, data: Partial<CustomerEntity>): Promise<CustomerEntity> {        
        const customer = await prisma.customers.findUnique({ where: { id } });
        if (!customer) throw `Customer with id ${id} not found`;

        const personPayload = data.person as any;
        if (!personPayload) throw `Person payload is required`;

        
        const personUpdate: any = {};
        if (personPayload.firstName !== undefined) personUpdate.first_name = personPayload.firstName;
        if (personPayload.secondName !== undefined) personUpdate.second_name = personPayload.secondName;
        if (personPayload.surname !== undefined) personUpdate.surname = personPayload.surname;
        if (personPayload.secondSurname !== undefined) personUpdate.second_surname = personPayload.secondSurname;
        if (personPayload.expeditionDate !== undefined) personUpdate.expedition_date = new Date(personPayload.expeditionDate);
        if (personPayload.birthdate !== undefined) personUpdate.birthdate = new Date(personPayload.birthdate);        
        personUpdate.updated_at = new Date();

        await prisma.persons.update({
            where: { id: customer.person_id },
            data: personUpdate,
        });

        // Return the updated aggregate similar to getAll mapping
        const updated = await prisma.customers.findUnique({
            where: { id },
            include: {
                persons: {
                    include: {
                        users: {
                            include: {
                                _count: { select: { tickets: true } }
                            }
                        }
                    }
                }
            }
        });

        if (!updated) throw `Customer with id ${id} not found after update`;

        const c = updated as any;
        const person = c.persons ? {
            id: c.persons.id,
            firstName: c.persons.first_name,
            secondName: c.persons.second_name,
            surname: c.persons.surname,
            secondSurname: c.persons.second_surname,
            documentTypeId: c.persons.document_type_id,
            documentNumber: c.persons.document_number,
            expeditionDate: c.persons.expedition_date,
            birthdate: c.persons.birthdate,
            createdAt: c.persons.created_at,
            updatedAt: c.persons.updated_at
        } : undefined;

        let ticketsCount = 0;
        if (c.persons && Array.isArray(c.persons.users)) {
            for (const u of c.persons.users) {
                ticketsCount += u._count?.tickets ?? 0;
            }
        }

        return CustomerEntity.formObject({
            personId: c.person_id,
            createdAt: c.created_at,
            updatedAt: c.updated_at,
            deletedAt: c.deleted_at,
            person,
            ticketsCount
        });
    }


}