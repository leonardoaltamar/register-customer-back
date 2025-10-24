import { prisma } from '../../../../data/mysql/index';
import { UserDataSource } from '../../domain/datasource/user.datasource';
import { UserEntity } from "../../domain/entity/user.entity";
import * as bcrypt from 'bcrypt';

export class UserDatasourceImpl implements UserDataSource {
    async getByUserName(userName: string): Promise<UserEntity> {
        const user = await prisma.users.findUnique({ where: { username: userName } });
        if (!user) {
            throw new Error('User not found');
        }
        return UserEntity.fromObject({
            id: user.id,
            username: user.username,
            password: user.password,
            personId: user.person_id,
        });
    }

    async create(user: UserEntity): Promise<UserEntity> {
        const password = await bcrypt.hash(user.password ?? '', 10);
        const data = {
            password: password,
            username: user.username,
            person_id: user.personId,
            user_type_id: user.userTypeId || 2,
        };

        const userCreate = await prisma.users.create({ data });

        return UserEntity.fromObject({
            password: undefined,
            username: user.username,
            person_id: user.personId,
            user_type_id: 2,
            created_at: new Date()
        });
    }

    async getAll(offset?: number | undefined, limit?: number | undefined): Promise<UserEntity[]> {
        const users = await prisma.users.findMany();
        return users.map(user => UserEntity.fromObject(user));
    }

    async getById(id: number): Promise<UserEntity> {
        const user = await prisma.users.findFirst({
            where: { id }
        })

        return UserEntity.fromObject(user!);
    }


}