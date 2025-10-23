import { Router } from "express";
import { GenderDatasourceImpl } from "../../infrastructure/datasource/gender.datasource.impl";
import { genderRepository } from "../../domain/repository/gender.repository";
import { genderRepositoryImpl } from "../../infrastructure/repository/gender.repository.impl";
import { GenderService } from "../service/gender.service";
import { GenderController } from '../controller/gender.controller';

export class GenderRouter{
    static get routes(): Router{
        const router = Router();

        const datasource = new GenderDatasourceImpl();
        const genderRepository = new genderRepositoryImpl(datasource);
        const genderService = new GenderService(genderRepository);
        const genderController = new GenderController(genderService);


        router.get('/', genderController.getAll)
        router.get('/:id', genderController.getById)
        router.post('/', genderController.create)
        

        return router;
    }
}