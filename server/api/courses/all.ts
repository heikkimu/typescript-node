import { Request, Response } from "express";
import R from "ramda";
import { findAllCourses } from "../../queries/findAllCourses";
import { onError } from "../onError";
import { onSuccess } from '../onSuccess';


export function all(req: Request, res: Response) {
    findAllCourses()
        .then(R.partial(onSuccess, [res]))
        .catch(R.partial(onError, [res, 'Find all courses failed']))
}


