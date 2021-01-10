import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/shared/interfaces/curso';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.scss']
})
export class CursoContainerComponent implements OnInit {

  cursos: Curso[];
  constructor() { }

  ngOnInit(): void {
  }

}
