import { CourseSummary } from './course-summary';
import { Lesson } from "./lesson";

export interface Course extends CourseSummary{
    readonly longDescription: string,
    readonly comingSoon: boolean,
    readonly isNew?: boolean,
    readonly isOngoing?: boolean,
    readonly lessons: Lesson[]
}