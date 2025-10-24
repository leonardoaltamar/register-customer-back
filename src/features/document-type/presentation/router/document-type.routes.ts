import { Router } from "express";
import { DocumentTypeController } from "../controller/document-type.controller";
import { DocumentTypeDatasourceImpl } from "../../infrastructure/datasource/document-type.datasource.impl";
import { DocumentTypeRepositoryImpl } from "../../infrastructure/repository/document-type.repository.impl";
import { DocumentTypeService } from "../service/document-type.service";




export class DocumentTypeRouter {
    static get routes(): Router {
        const router = Router();

        const datasource = new DocumentTypeDatasourceImpl();
        const customerRepository = new DocumentTypeRepositoryImpl(datasource);
        const customerService = new DocumentTypeService(customerRepository);
        const customerController = new DocumentTypeController(customerService);


        router.get('/', customerController.getAll)
        router.get('/:id', customerController.getById)
        router.post('/', customerController.create)
        

        return router;

    }
}