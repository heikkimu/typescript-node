import { Request, Response, NextFunction } from "express";


export function ApiErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction) {

    console.error("API error handler triggered", err);
    res.status(500).json({ errorCode: 'ERR-001', message: "Internal server error" })
}