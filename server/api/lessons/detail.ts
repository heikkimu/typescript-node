import { Request, Response } from 'express';
import * as R from 'ramda';
import { onSuccess } from '../onSuccess';
import { onError } from '../onError';
import { findLessonDetail } from '../../queries/findLessonDetail';

export function detail(req: Request, res: Response) {
    console.log(req);
    findLessonDetail(req.params.id)
        .then(R.partial(onSuccess, [res]))
        .catch(R.partial(onError, [res, 'Could not find course detail']))
}