import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

import { AuthService } from "../service/auth.service";
import { UserDatasourceImpl } from "../../../user/infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../../user/infrastructure/repository/user.repository.impl";

export class AuthRouter {
    static get routes(): Router {
        const router = Router();
        const datasource = new UserDatasourceImpl();
        const userRepository = new UserRepositoryImpl(datasource);
        const authService = new AuthService(userRepository);
        const authController = new AuthController(authService);

        router.post('/login', authController.login);

        return router;
    }
}