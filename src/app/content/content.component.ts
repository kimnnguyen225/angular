import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    author: string = "Kim";

    // selectedStudent: Student;

    // getSelectedStudent(student: Student):void {
    //   this.selectedStudent = student;
    // }
    //
    // displaySelectedStudent():void{
    //   console.log("Selected student is", this.selectedStudent.name)
    // }

    students: Student[] = [
      new Student("Kim", "Green", 10),
      new Student("Long", "Blue", 11),
      new Student("Elisha", "Yellow", 3)
    ];
    // nameOfStudent(name:string):void{
    //   console.log("clicked on ",name);
    // }
    // clickme():void {
    //   console.log("You clicked the button");
    // }
  constructor() { }

  ngOnInit() {
  }
}
