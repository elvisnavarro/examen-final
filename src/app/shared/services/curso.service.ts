import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from 'src/app/shared/interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiUrl = `${environment.apiUrl}course/`;
  constructor(private http: HttpClient) { }

  getCursosFeatured(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}?featured=true`);
  }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}`);
  }

  getCurso(id: number): Observable<Curso> {
    return new Observable<Curso>(() => {});
  }
}
