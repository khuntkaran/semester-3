import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent {
  users:User[] = []

  myForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  })

  arrindex=-1;

  insert(){
    if(this.arrindex>-1){
      this.users[this.arrindex]=(<User>this.myForm.value) 
    }
    else{
      this.users.push(<User>this.myForm.value) 
    }
    this.arrindex=-1
    this.myForm.controls.name.setValue('');
    this.myForm.controls.age.setValue('');
  }

  delete(i:any){
    this.users.splice(i,1)
  }

  update(i:any){
    this.arrindex=i;
    this.myForm.controls.name.setValue(this.users[i].name);
    this.myForm.controls.age.setValue(this.users[i].age);
  }
}
