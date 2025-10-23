import { prisma } from '../../../../data/mysql/index';
import { UserDataSource } from '../../domain/datasource/user.datasource';
import { UserEntity } from "../../domain/entity/user.entity";

export class UserDatasourceImpl implements UserDataSource {

    async create(user: UserEntity): Promise<UserEntity> {

        const userCreate = await prisma.users.create({
            data: {
                password: user.password,
                username: user.username,
                person_id: user.personId,
                created_at: new Date()
            }
        })

        return UserEntity.formObject(userCreate);
        /* throw new Error("Method not implemented."); */
    }

    async getAll(offset?: number | undefined, limit?: number | undefined): Promise<UserEntity[]> {
        const users = await prisma.users.findMany();
        return users.map(user => UserEntity.formObject(user));
    }

    async getById(id: number): Promise<UserEntity> {
        const user = await prisma.users.findFirst({
            where: { id }
        })

        return UserEntity.formObject(user!);
    }


}