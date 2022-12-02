import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultynameComponent } from './facultyname/facultyname.component';
import { Morethen10expComponent } from './morethen10exp/morethen10exp.component';
import { CurdComponent } from './curd/curd.component';
import { StudentsComponent } from './students/students.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FacultynameComponent,
    Morethen10expComponent,
    CurdComponent,
    StudentsComponent,
    DetailStudentComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,         //For Routing
    FormsModule,              //[(ngmodle)]   contact-page        two-way-data-buiding
    ReactiveFormsModule,      //FormGroup     curd-page           form-making
    HttpClientModule          //HttpClient    api-student.service api-fatch
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
