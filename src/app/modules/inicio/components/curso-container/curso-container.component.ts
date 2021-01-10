import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/shared/interfaces/curso';
import { CursoService } from 'src/app/shared/services/curso.service';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.scss']
})
export class CursoContainerComponent implements OnInit {

  cursos: Curso[];
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getCursosFeatured().subscribe( cursos => this.cursos = cursos );
  }

}
