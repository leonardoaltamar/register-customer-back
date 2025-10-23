import { Router } from "express";
import { GenderRouter } from "./features/genders/presentation/router/gender.routes";

export class AppRoutes{
    static get routes(): Router{
        const router = Router();

        router.use('/api/genders', GenderRouter.routes)

        return router;
 
    }
}