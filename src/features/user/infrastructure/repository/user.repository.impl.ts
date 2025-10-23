import { UserDataSource } from "../../domain/datasource/user.datasource";
import { UserEntity } from "../../domain/entity/user.entity";
import { UserRepository } from "../../domain/repository/user.repository";



export class UserRepositoryImpl implements UserRepository {

    constructor(private readonly datasource: UserDataSource) { }

    create(gender: UserEntity): Promise<UserEntity> {
        return this.datasource.create(gender);

    }

    getAll(offset?: number | undefined, limit?: number | undefined): Promise<UserEntity[]> {
        return this.datasource.getAll(offset, limit);

    }

    getById(id: number): Promise<UserEntity> {
        return this.datasource.getById(id);
    }

}