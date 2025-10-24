import { Router } from "express";
import { CustomerDatasourceImpl } from "../../infrastructure/datasource/customer.datasource.impl";
import { CustomerRepositoryImpl } from "../../infrastructure/repository/customer.repository.impl";
import { CustomerService } from "../service/customer.service";
import { CustomerController } from "../controller/customer.controller";




export class CustomerRouter {
    static get routes(): Router {
        const router = Router();

        const datasource = new CustomerDatasourceImpl();
        const customerRepository = new CustomerRepositoryImpl(datasource);
        const customerService = new CustomerService(customerRepository);
        const customerController = new CustomerController(customerService);


    router.get('/', customerController.getAll)
    router.get('/:id', customerController.getById)
    router.post('/', customerController.create)
    router.put('/:id', customerController.update)
    router.delete('/:id', customerController.delete)


        return router;
    }
}