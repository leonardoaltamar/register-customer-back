import { envs } from "../../../../config";
import { UserRepository } from "../../../user/domain/repository/user.repository";
import { AuthEntity } from "../../domain";

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class AuthService {
    constructor(private readonly repository: UserRepository) { }

    async login(username: string, password: string): Promise<AuthEntity> {
        const user = await this.repository.getByUserName(username);

        if (!user) {
            throw new Error('User not found');
        }

        /* if (!user.state) {
            throw new Error('User not active');
        } */

        const validPassword = await bcrypt.compare(password, user.password!);
        if (!validPassword) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ id: user.id, username: user.username, userTypeId: user.userTypeId }, envs.JWT_SECRET, { expiresIn: '3h' });

        const authEntity = new AuthEntity(user, token)

        return authEntity;
    }
}