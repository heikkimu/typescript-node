import Lessons from "../models/lessons";

export function findLessonDetail(id: string) {
    return Lessons.findByPk(id);
}