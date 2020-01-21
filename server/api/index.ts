import courses from "./courses/";
import { Application } from "express";

export function initApi(app: Application){
    app.use('/api/courses', courses)
}
