import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  students:any

  constructor(private service:StudentService){
    this.service.getAllStudents().subscribe(res=>this.students=res)

  }

}
