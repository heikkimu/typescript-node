import { CourseSummary } from './course-summary';
import { Lesson } from "./lesson";

export interface CourseDetail extends CourseSummary{
    readonly longDescription: string,
    readonly comingSoon: boolean,
    readonly isNew?: boolean,
    readonly isOngoing?: boolean,
    readonly lessons: Lesson[]
}