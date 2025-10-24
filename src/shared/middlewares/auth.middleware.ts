import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { envs } from '../../config';

// Extender la interfaz de Request para agregar el usuario decodificado
export interface AuthRequest extends Request {
    user?: {
        id: number;
        username: string;
        userTypeId: number;
    };
}

export class AuthMiddleware {
    static validateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
        const authorization = req.header('Authorization');

        if (!authorization) {
            return res.status(401).json({ error: 'No token provided', data: null });
        }

        if (!authorization.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Invalid Bearer token', data: null });
        }

        const token = authorization.split(' ').at(1) || '';

        try {
            const payload = jwt.verify(token, envs.JWT_SECRET) as {
                id: number;
                username: string;
                userTypeId: number;
            };

            // Agregar el usuario decodificado al request
            req.user = payload;

            next();
        } catch (error) {
            return res.status(401).json({ error: 'Invalid token', data: null });
        }
    };
}
