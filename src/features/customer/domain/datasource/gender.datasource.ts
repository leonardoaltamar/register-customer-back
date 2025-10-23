import { CustomerEntity } from "../entity/customer.entity";

export abstract class CustomerDatasource {

    abstract create(customer: CustomerEntity): Promise<CustomerEntity>;

    abstract getAll(offset?: number, limit?: number): Promise<CustomerEntity[]>;

    abstract getById(id: number): Promise<CustomerEntity>;

}