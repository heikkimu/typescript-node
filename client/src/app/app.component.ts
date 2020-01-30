import { CourseDetail } from './../../../shared/model/course-detail';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'It works!';
  course$: Observable<CourseDetail>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.course$ = this.coursesService.loadCourseDetail(1);
  }
}
