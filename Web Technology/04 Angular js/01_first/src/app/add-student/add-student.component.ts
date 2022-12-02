import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  myForm=new FormGroup({
    name: new FormControl('',Validators.required),
    phone: new FormControl(''),
    image: new FormControl(''),
    rollno: new FormControl(''),
    address: new FormControl('')
  })
  id=-1;
  btnName="Add Student"
  constructor(private api:ApiStudentService ,private router:Router,private actrote:ActivatedRoute){

  }

  ngOnInit(){
    if(this.actrote.snapshot.params['id']!=null){
      this.id=this.actrote.snapshot.params['id']
      this.api.getAllStudentById(this.id).subscribe((res:any)=>{
        this.myForm.controls.name.setValue(res.name);
        this.myForm.controls.phone.setValue(res.phone);
        this.myForm.controls.image.setValue(res.image);
        this.myForm.controls.rollno.setValue(res.rollno);
        this.myForm.controls.address.setValue(res.address);
      })
      this.btnName="Edit Student"
    }
  }
  insert(){
    if(this.id>0){
      this.api.update(this.id,this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/students']); 
      })
    }
    else{
      this.api.insert(this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/students']); 
      })
    }
    
  }
}
