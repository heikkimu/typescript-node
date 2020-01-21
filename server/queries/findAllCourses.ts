import Courses from '../models/courses';

export function findAllCourses() {
    return Courses.findAll({
        order: ['seqNo']
    })
}


