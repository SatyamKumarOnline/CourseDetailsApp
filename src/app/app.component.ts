import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
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

  @ViewChildren(CourseCardComponent, {read: ElementRef })
  cards: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    debugger;
    this.cards.changes.subscribe(
      cards => console.log('Cards::', cards)
    );
  }

  editList() {
    this.courseList.push(
      {
        id: 3,
        description: 'NgRx In Depth',
        longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'ADVANCED'
    }
    );
  }

  selectedCourse(course) {
    debugger;
    console.log(11, this.courseItem);
    console.log(11, this.testContainerElemRef);
    console.log(22, this.courseItemElemRef);
  }
}
