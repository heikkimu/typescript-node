import { Request, Response } from 'express';
import * as R from 'ramda';
import { onSuccess } from '../onSuccess';
import { onError } from '../onError';
import { findCourseDetail } from '../../queries/findCourseDetail';

export function detail(req: Request, res: Response) {
    const courseId = parseInt(req.params.id);
    console.log(courseId);
    findCourseDetail(courseId)
        .then(R.partial(onSuccess, [res]))
        .catch(R.partial(onError, [res, 'Could not find course detail']))
}