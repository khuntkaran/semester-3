import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ContactComponent } from './contact/contact.component';
import { CurdComponent } from './curd/curd.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { FacultynameComponent } from './facultyname/facultyname.component';
import { HomeComponent } from './home/home.component';
import { Morethen10expComponent } from './morethen10exp/morethen10exp.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'facultyname',component:FacultynameComponent},
  {path:'morethan10exp',component:Morethen10expComponent},
  {path:'curd',component:CurdComponent},
  {path:'students',component:StudentsComponent},
  {path:'student/add',component:AddStudentComponent},
  {path:'student/edit/:id',component:AddStudentComponent},
  {path:'student/:id',component:DetailStudentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
