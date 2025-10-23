import { Router } from "express";

import { UserDatasourceImpl } from "../../infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrastructure/repository/user.repository.impl";
import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";


export class GenderRouter {
    static get routes(): Router {
        const router = Router();

        const datasource = new UserDatasourceImpl();
        const userRepository = new UserRepositoryImpl(datasource);
        const userService = new UserService(userRepository);
        const userController = new UserController(userService);


        router.get('/', userController.getAll)
        router.get('/:id', userController.getById)
        router.post('/', userController.create)


        return router;
    }
}