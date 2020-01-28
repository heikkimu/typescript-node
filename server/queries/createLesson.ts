import Lessons from "../models/lessons";

export function createLesson(props: any) {
    return Lessons.create(props);
}

