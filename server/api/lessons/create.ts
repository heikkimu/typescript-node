import { Request, Response } from 'express';
import * as R from 'ramda';
import { createLesson } from '../../queries/createLesson';
import { onSuccess } from '../onSuccess';
import { onError } from '../onError';
import { databaseErrorHandler } from '../databaseErrorHandler';


export function create(req: Request, res: Response) {
    createLesson(req.body)
        .then(R.partial(onSuccess, [res]))
        .catch(R.partial(databaseErrorHandler, [res]))
        .catch(R.partial(onError, [res, 'Could not create a lesson']))
}