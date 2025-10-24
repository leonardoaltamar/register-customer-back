import { CustomerEntity } from "../entity/customer.entity";

export abstract class CustomerDatasource {

    abstract create(customer: CustomerEntity): Promise<CustomerEntity>;

    abstract getAll(offset?: number, limit?: number): Promise<CustomerEntity[]>;

    abstract getById(id: number): Promise<CustomerEntity>;

    // Soft delete: sets deleted_at automatically
    abstract delete(id: number): Promise<void>;

    // Update person data for a customer without changing document fields
    abstract update(id: number, data: Partial<CustomerEntity>): Promise<CustomerEntity>;

}