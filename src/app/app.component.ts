import { Component, ViewChild, ElementRef } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseList = COURSES;

  // ViewChild makes a reference to component template view either by componentname or reference.
  // makes reference to component in component template by component name.

  @ViewChild('imgContainer', {static: false})
  imgHolder: ElementRef;

  @ViewChild(CourseCardComponent, {static: false})
  courseItem: CourseCardComponent;
  // makes reference to component in component template
  @ViewChild('courseCardDemo', {static: false, read: ElementRef})
  courseElement: ElementRef;

  selectedCourse(course) {
    debugger;
    console.log(11, course);
    console.log(this.courseElement);
  }

  ngAfterViewInit(): void {

     /** Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
     Add 'implements AfterViewInit' to the class.
      */

    debugger;
    this.imgHolder;
    this.courseItem;
    this.courseElement;

  }


}
