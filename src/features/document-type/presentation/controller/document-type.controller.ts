import { Request, Response } from "express";
import { DocumentTypeService } from "../service/document-type.service";




export class DocumentTypeController {



    constructor(private service: DocumentTypeService) {


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
}