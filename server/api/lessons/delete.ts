import { Request, Response } from 'express';
import { deleteLesson } from '../../queries/deleteLesson';
import { onSuccess } from '../onSuccess';
import * as R from 'ramda';
import { databaseErrorHandler } from '../databaseErrorHandler';
import { onError } from '../onError';

export function deleteLessonApi(req: Request, res: Response) {
    deleteLesson(req.params.id)
        .then(R.partial(onSuccess, [res]))
        .catch(R.partial(databaseErrorHandler, [res]))
        .catch(R.partial(onError, [res, 'Deleting lesson failed']))

}