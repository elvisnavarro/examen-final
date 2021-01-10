import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Instructor } from '../inferfaces/instructor';

@Injectable({
  providedIn: 'root'
})

export class InstructorService {

  apiUrl = `${environment.apiUrl}instructor/`;
  constructor(private http: HttpClient) { }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.apiUrl}`);
  }
}
