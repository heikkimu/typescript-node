import { map } from 'rxjs/operators';
import { CourseDetail } from './../../../../shared/model/course-detail';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class CoursesService {
    constructor(private http: HttpClient) {
    }

    loadCourseDetail(courseId: number): Observable<CourseDetail> {
        return this.http.get(`api/courses/${courseId}`)
            .pipe(map((res) => res.payload ))
    }
}
