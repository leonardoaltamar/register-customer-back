import { prisma } from '../../../../data/mysql/index';
import { CustomerDatasource } from '../../domain/datasource/gender.datasource';
import { CustomerEntity } from '../../domain/entity/customer.entity';


export class CustomerDatasourceImpl implements CustomerDatasource {

    async create(customer: CustomerEntity): Promise<CustomerEntity> {

        const customerCreate = await prisma.customers.create({
            data: {
                person_id: customer.personId
            }
        })

        return CustomerEntity.formObject(customerCreate);
        /* throw new Error("Method not implemented."); */
    }

    async getAll(offset?: number | undefined, limit?: number | undefined): Promise<CustomerEntity[]> {
        const customers = await prisma.customers.findMany();
        return customers.map(customer => CustomerEntity.formObject(customer));
    }

    async getById(id: number): Promise<CustomerEntity> {
        const customer = await prisma.customers.findFirst({
            where: { id }
        })

        return CustomerEntity.formObject(customer!);
    }


}