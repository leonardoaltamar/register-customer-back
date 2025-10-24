
import { CustomerEntity } from '../../domain/entity/customer.entity';
import { CustomerRepository } from '../../domain/repository/customer.repository';
export class CustomerService {
    constructor(private customerRepository: CustomerRepository) {

    }

    public getAll = async (offset?: number, limit?: number): Promise<CustomerEntity[]> => {
        return await this.customerRepository.getAll(offset, limit);
    }

    public getById = async (id: number): Promise<CustomerEntity> => {
        return await this.customerRepository.getById(id);
    }

    public create = async (gender: CustomerEntity) => {
        return await this.customerRepository.create(gender);
    }

    public delete = async (id: number): Promise<void> => {
        return await this.customerRepository.delete(id);
    }

    public update = async (id: number, data: Partial<CustomerEntity>): Promise<CustomerEntity> => {
        return await this.customerRepository.update(id, data);
    }

}