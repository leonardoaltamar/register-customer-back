import { Request, Response } from "express";
import { PersonService } from "../service/person.service";
;

export class PersonController {
    constructor(private service: PersonService) { }

    public create = (req: Request, res: Response) => {
        this.service.create(req.body)
            .then(gender => {
                res.json({ error: null, data: gender });
            })
            .catch(error => res.status(400).json({ error: error, data: null }))
    }

}