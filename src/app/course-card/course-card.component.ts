import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Course} from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }


  // Input passed from parent to child component.
  @Input() course: Course;

  // Output courseSelected / emits a value to parent component, the type of value which will be emitted.
  @Output() courseSelected = new EventEmitter<Course>();


  ngOnInit() {
  }

  viewCourse() {
    this.courseSelected.emit(this.course);
  }

}
