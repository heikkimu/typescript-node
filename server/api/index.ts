import courses from "./courses/";
import lessons from "./lessons/";
import { Application } from "express";

export function initApi(app: Application){
    app.use('/api/courses', courses)
    app.use('/api/lessons', lessons)
}
