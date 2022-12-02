import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  data: Student[] = [];

  constructor(private api: ApiStudentService) {

  }

  ngOnInit() {
    this.api.getAllStudents().subscribe((res: any) => {
      this.data = res;
    })
  }

  delete(id: any) {
    this.api.delete(id).subscribe((res) => {
      this.ngOnInit();
    })
  }
}
