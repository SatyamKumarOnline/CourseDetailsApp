import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseList = COURSES;
  selectedCourse(course) {
    debugger;
    console.log(11,course);
  }
}
