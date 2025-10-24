import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";
import { handleError } from "../../../../shared";
import { AuthEntity } from "../../domain";
import { UserEntity } from "../../../user/domain/entity/user.entity";

export class AuthController {
    constructor(private readonly authService: AuthService) { }

    login = (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            const token = this.authService.login(username, password).then(
                (resp: AuthEntity) => {
                    const user: UserEntity = resp.user;
                    const newUser: UserEntity = { ...user, password: undefined }
                    res.json({ token: resp.token, user: newUser });
                }
            ).catch(error => {
                handleError(error, res)
            })
        } catch (error) {
            handleError(error, res);
        }
    }
}