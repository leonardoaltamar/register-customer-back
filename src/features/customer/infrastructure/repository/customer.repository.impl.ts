import { CustomerDatasource } from "../../domain/datasource/customer.datasource";
import { CustomerEntity } from "../../domain/entity/customer.entity";
import { CustomerRepository } from "../../domain/repository/customer.repository";

export class CustomerRepositoryImpl implements CustomerRepository {

    constructor(private readonly datasource: CustomerDatasource) { }

    create(customer: CustomerEntity): Promise<CustomerEntity> {
        return this.datasource.create(customer);

    }

    getAll(offset?: number | undefined, limit?: number | undefined): Promise<CustomerEntity[]> {
        return this.datasource.getAll(offset, limit);

    }

    getById(id: number): Promise<CustomerEntity> {
        return this.datasource.getById(id);
    }

}