import { CourseDetail } from './../../shared/model/course-detail';
import Courses from "../models/courses";
import Lessons from "../models/lessons";
import { createCourseDetail } from '../../shared/model/createCourseDetail';

export function findCourseDetail(courseId: number): Promise<CourseDetail> {
    return Courses.findByPk(courseId, {
        include: [{
            model: Lessons
        }]
    })
    .then(createCourseDetail)
}