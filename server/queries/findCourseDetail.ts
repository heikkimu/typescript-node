import Courses from "../models/courses";
import Lessons from "../models/lessons";

export function findCourseDetail(courseId: number) {
    return Courses.findByPk(courseId, {
        include: [{
            model: Lessons
        }]
    });
}