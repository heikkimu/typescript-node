import { CourseSummary, createCourseSummaries } from './../../shared/model/course-summary';
import Courses from '../models/courses';

export function findAllCourses(): Promise<CourseSummary[]> {
    return Courses.findAll({
        order: ['seqNo']
    })
    .then(createCourseSummaries)
}


