import { CustomerEntity } from "../entity/customer.entity";

export abstract class CustomerRepository {

    abstract create(customer: CustomerEntity): Promise<CustomerEntity>;

    abstract getAll(offset?: number, limit?: number): Promise<CustomerEntity[]>;

    abstract getById(id: number): Promise<CustomerEntity>;
    
    abstract delete(id: number): Promise<void>;

    abstract update(id: number, data: Partial<CustomerEntity>): Promise<CustomerEntity>;

}