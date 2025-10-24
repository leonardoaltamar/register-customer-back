import { Router } from "express";
import { PersonRouter } from "./features/person/presentation/router/person.routes";
import { CustomerRouter } from "./features/customer/presentation/router/customer.routes";
import { UserRouter } from "./features/user/presentation/router/user.routes";
import { AuthRouter } from "./features/auth";
import { DocumentTypeRouter } from "./features/document-type/presentation/router/document-type.routes";
import { AuthMiddleware } from "./shared/middlewares";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        // Rutas públicas (sin protección)
        router.use('/api/auth', AuthRouter.routes);

        // Aplicar middleware de autenticación a todas las rutas siguientes
        router.use(AuthMiddleware.validateJWT);

        // Rutas protegidas (requieren token JWT)
        router.use('/api/persons', PersonRouter.routes)
        router.use('/api/users', UserRouter.routes);
        router.use('/api/document-types', DocumentTypeRouter.routes);
        router.use('/api/customers', CustomerRouter.routes);


        return router;

    }
}