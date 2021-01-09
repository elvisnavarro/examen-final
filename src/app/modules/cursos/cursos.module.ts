import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { CursosDetallePageComponent } from './pages/cursos-detalle-page/cursos-detalle-page.component';


@NgModule({
  declarations: [CursosPageComponent, CursosDetallePageComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
