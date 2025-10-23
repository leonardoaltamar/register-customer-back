import { Router } from "express";

import { PersonController } from '../controller/person.controller';
import { PersonDatasourceImpl } from "../../infrastructure/datasource/person.datasource.impl";
import { PersonRepositoryImpl } from "../../infrastructure/repository/person.repository.impl";
import { PersonService } from "../service/person.service";

export class PersonRouter {
    static get routes(): Router {
        const router = Router();

        const datasource = new PersonDatasourceImpl();
        const personRepository = new PersonRepositoryImpl(datasource);
        const personService = new PersonService(personRepository);
        const personController = new PersonController(personService);


        router.post('/', personController.create)


        return router;
    }
}