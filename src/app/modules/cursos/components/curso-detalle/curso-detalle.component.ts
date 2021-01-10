import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Curso } from 'src/app/shared/interfaces/curso';
import { CursoService } from 'src/app/shared/services/curso.service';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})
export class CursoDetalleComponent implements OnInit {

  curso: Curso;
  constructor(
    private router: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const id = this.getCursoId(params);
      this.cursoService.getCurso(Number(id)).subscribe(
        curso => this.curso = curso
      );
    });
  }

  getCursoId(params: Params): number {
    return params.id;
  }

}
