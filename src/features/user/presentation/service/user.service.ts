
import { UserEntity } from '../../domain/entity/user.entity';
import { UserRepository } from '../../domain/repository/user.repository';
export class UserService {
    constructor(private repository: UserRepository) {

    }

    public getAll = async (offset?: number, limit?: number): Promise<UserEntity[]> => {
        return await this.repository.getAll(offset, limit);
    }

    public getById = async (id: number): Promise<UserEntity> => {
        return await this.repository.getById(id);
    }

    public create = async (user: UserEntity) => {
        return await this.repository.create(user);
    }

}