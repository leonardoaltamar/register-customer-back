import { Router } from "express";
import { PersonRouter } from "./features/person/presentation/router/person.routes";
import { CustomerRouter } from "./features/customer/presentation/router/customer.routes";
import { UserRouter } from "./features/user/presentation/router/user.routes";
import { AuthRouter } from "./features/auth";
import { DocumentTypeRouter } from "./features/document-type/presentation/router/document-type.routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/persons', PersonRouter.routes)
        router.use('/api/users', UserRouter.routes);
        router.use('/api/document-types', DocumentTypeRouter.routes);
        router.use('/api/customers', CustomerRouter.routes);
        router.use('/api/auth', AuthRouter.routes);


        return router;

    }
}