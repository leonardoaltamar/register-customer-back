import { Router } from "express";
import { GenderRouter } from "./features/genders/presentation/router/gender.routes";
import { PersonRouter } from "./features/person/presentation/router/person.routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/persons', PersonRouter.routes)

        return router;

    }
}