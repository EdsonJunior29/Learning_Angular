import { Component, OnInit } from "@angular/core";
import { Course } from "./Course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

  courses : Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name : 'Angular : Forms',
        imageURL: '',
        price: 100.00,
        code: 'XPS-9786',
        duration: 120,
        rating: 5.4,
        releadeDate: 'December, 2 ,2021'
      } ,
      {
        id: 2,
        name : 'Angular : HTTP',
        imageURL: '',
        price: 45.90,
        code: 'XPS-1094',
        duration: 120,
        rating: 5.4,
        releadeDate: 'January, 2 ,2022'

      }

    ]
  }

}
