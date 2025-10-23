import { Request, Response } from "express";
import { UserService } from "../service/user.service";


export class UserController {



    constructor(private service: UserService) {


    }

    public getAll = (req: Request, res: Response) => {

        this.service.getAll()
            .then((genders) => {
                res.json({ error: null, data: genders })
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({ error: error, data: [] });
            })
    }

    public create = (req: Request, res: Response) => {
        this.service.create(req.body)
            .then(gender => {
                res.json({ error: null, data: gender });
            })
            .catch(error => res.status(400).json({ error: error, data: null }))
    }


    public getById = (req: Request, res: Response) => {
        const id = +req.params.id;
        this.service.getById(id)
            .then(gender => {
                res.json({ error: null, data: gender });
            })
            .catch(error => {
                res.status(404).json({ error: error, data: null })
            })
    }
}