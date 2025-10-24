import { UserEntity } from "../../../user/domain/entity/user.entity";

export class AuthEntity {
    constructor(
        public user: UserEntity,
        public token: string
    ) { }
}