import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_STUDENT = environment.API_URL + '/student/';

  constructor(private http: HttpClient) {
  }


  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.API_STUDENT + 'create', student);
  }

  listStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_STUDENT + 'list');
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(this.API_STUDENT + `find/` + id);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.API_STUDENT + `update`, student);
  }

  deleteById(id: number): Observable<Student> {
    return this.http.delete<Student>(this.API_STUDENT + `delete/` + id);
  }
}
