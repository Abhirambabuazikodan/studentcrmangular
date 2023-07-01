import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(`http://127.0.0.1:8000/api/students/`)
  }

  getStudentDetail(id:any){
    return this.http.get(`http://127.0.0.1:8000/api/students/${id}`)
  }
  editstudent(id:any,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/students/${id}/`,data)
  }
  createStudent(data:any){
    return this.http.post(`http://127.0.0.1:8000/api/students/`,data)
  }
  deleteStudent(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/students/${id}`)
  }






}
