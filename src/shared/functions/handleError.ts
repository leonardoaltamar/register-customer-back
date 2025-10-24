import { Response } from "express";
import { CustomError } from "../errors/custom.error";

export const handleError = (error: unknown, res: Response) => {
    console.log('error que proviene de grupos implement',error);
    
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Internal server error.' })
}