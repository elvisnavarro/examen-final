import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/shared/interfaces/curso';
import { CursoService } from 'src/app/shared/services/curso.service';

@Component({
  selector: 'app-curso-grid',
  templateUrl: './curso-grid.component.html',
  styleUrls: ['./curso-grid.component.scss']
})
export class CursoGridComponent implements OnInit {

  cursos: Curso[];
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe( cursos => this.cursos = cursos );
  }

}
