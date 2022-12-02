import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiStudentService {
  apiurl="https://62e7ab1e0e5d74566af96c99.mockapi.io/student"
  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(this.apiurl)
  }

  getAllStudentById(id:any){
    return this.http.get(this.apiurl+'/'+id)
  }

  delete(id:any){
    return this.http.delete(this.apiurl+'/'+id)
  }

  insert(form:any){
    return this.http.post(this.apiurl,form)
  }

  update(id:any,form:any,){
    return this.http.put(this.apiurl+'/'+id,form)
  }
}
