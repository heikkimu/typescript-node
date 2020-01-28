import Lessons from "../models/lessons";


export function updateLesson(id: string, props: any) {
    return Lessons.update(
        props,
        {
            where: {
                id
            }
        }
    )
}