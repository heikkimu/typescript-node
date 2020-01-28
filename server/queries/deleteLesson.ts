import Lessons from "../models/lessons";
import { where } from "ramda";

export function deleteLesson(id: string) {
    return Lessons.destroy({where: {id}})
}