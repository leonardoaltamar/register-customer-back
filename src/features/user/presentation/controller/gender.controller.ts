import { Request, Response } from "express";
import { genderRepository } from "../../domain/repository/gender.repository";
import { GenderService } from "../service/gender.service";
import { GenderEntity } from "../../domain/entity/gender.entity";

export class GenderController{

    

    constructor(private genderService: GenderService){
        

    }

    public getAll = (req: Request, res: Response) => {

        this.genderService.getAll()
        .then((genders) => {
            res.json({error:null, data: genders})
        })
        .catch((error) => {
            console.log(error);            
            res.status(400).json({error: error, data: []});
        })
    }

    public create = (req: Request, res: Response) => {
        this.genderService.create(req.body)
        .then(gender => {
            res.json({ error: null, data: gender });
        })
        .catch(error => res.status(400).json({error: error, data: null})) 
    }


    public getById = (req: Request, res: Response) => {
        const id = +req.params.id;        
        this.genderService.getById(id)
        .then( gender => {
            res.json({error: null, data: gender});
        })
        .catch( error => {
            res.status(404).json({error: error, data: null})
        })
    }
}