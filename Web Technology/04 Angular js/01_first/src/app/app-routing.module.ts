import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FacultynameComponent } from './facultyname/facultyname.component';
import { HomeComponent } from './home/home.component';
import { Morethen10expComponent } from './morethen10exp/morethen10exp.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'facultyname',component:FacultynameComponent},
  {path:'morethan10exp',component:Morethen10expComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
