import { Response, Request } from 'express';
import { updateLesson } from '../../queries/updateLesson';
import { onSuccess } from '../onSuccess';
import { onError } from '../onError';
import * as R from 'ramda';
import { databaseErrorHandler } from '../databaseErrorHandler';

export function patch(req: Request, res: Response) {
    updateLesson(req.params.id, req.body)
        .then(R.partial(onSuccess, [res]))
        .catch(R.partial(databaseErrorHandler, [res]))
        .catch(R.partial(onError, [res, 'Could not update the lesson']))
}