import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { CursosDetallePageComponent } from './pages/cursos-detalle-page/cursos-detalle-page.component';
import { CursoGridComponent } from './components/curso-grid/curso-grid.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CursosPageComponent, CursosDetallePageComponent, CursoGridComponent, CursoDetalleComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
