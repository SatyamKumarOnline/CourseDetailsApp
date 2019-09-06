import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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

  @Input() courseIndex: number;

  // Output courseSelected / emits a value to parent component, the type of value which will be emitted.
  @Output() courseSelected = new EventEmitter<Course>();

  @ViewChild('demo', {static: false})
  demoViewChild: ElementRef;

  ngOnInit() {
  }

  viewCourse() {
    this.courseSelected.emit(this.course);
  }


  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  ngAfterViewInit(): void {
   // debugger;
   // this.demoViewChild.nativeElement.value = 'Demo Data Value Changed'
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}
