import { UserEntity } from "../entity/user.entity";

export abstract class UserDataSource {

    abstract create(gender: UserEntity): Promise<UserEntity>;

    abstract getAll(offset?: number, limit?: number): Promise<UserEntity[]>;

    abstract getById(id: number): Promise<UserEntity>;

    abstract getByUserName(userName: string): Promise<UserEntity>;

}