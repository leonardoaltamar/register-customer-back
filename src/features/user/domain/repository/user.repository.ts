import { UserEntity } from "../entity/user.entity";

export abstract class UserRepository {

    abstract create(user: UserEntity): Promise<UserEntity>;

    abstract getAll(offset?: number, limit?: number): Promise<UserEntity[]>;

    abstract getById(id: number): Promise<UserEntity>;

}