import { Component, ViewChild, ElementRef } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courseList = COURSES;

  @ViewChild(CourseCardComponent, { static: false })
  courseItem: CourseCardComponent;

  @ViewChild('cardRef1', { static: false, read: ElementRef })
  courseItemElemRef: ElementRef;

  @ViewChild('testContainer', { static: false })
  testContainerElemRef: ElementRef;

  selectedCourse(course) {
    debugger;
    console.log(11, this.courseItem);
    console.log(11, this.testContainerElemRef);
    console.log(22, this.courseItemElemRef);
  }
}
