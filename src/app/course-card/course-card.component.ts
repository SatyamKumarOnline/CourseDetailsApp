import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  // Input passed from parent to child component
  @Input() course: Course;

  ngOnInit() {
  }

}
