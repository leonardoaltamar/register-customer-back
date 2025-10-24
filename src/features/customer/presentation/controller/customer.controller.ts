import { Request, Response } from "express";

import { CustomerService } from "../service/customer.service";


export class CustomerController {



    constructor(private service: CustomerService) {


    }

    public getAll = (req: Request, res: Response) => {

        this.service.getAll()
            .then((customers) => {
                res.json({ error: null, data: customers })
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({ error: error, data: [] });
            })
    }

    public create = (req: Request, res: Response) => {
        this.service.create(req.body)
            .then(customer => {
                res.json({ error: null, data: customer });
            })
            .catch(error => res.status(400).json({ error: error, data: null }))
    }


    public getById = (req: Request, res: Response) => {
        const id = +req.params.id;
        this.service.getById(id)
            .then(customer => {
                res.json({ error: null, data: customer });
            })
            .catch(error => {
                res.status(404).json({ error: error, data: null })
            })
    }

    public delete = (req: Request, res: Response) => {
        const id = +req.params.id;
        this.service.delete(id)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error, data: null }));
    }

    public update = (req: Request, res: Response) => {
        const id = +req.params.id;
        this.service.update(id, req.body)
            .then(customer => res.json({ error: null, data: customer }))
            .catch(error => res.status(400).json({ error, data: null }));
    }
}