import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Curso } from 'src/app/shared/interfaces/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  @Input() curso: Curso;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDetalle(index: number): void{
    this.router.navigate(['/cursos', index]);
  }
}
