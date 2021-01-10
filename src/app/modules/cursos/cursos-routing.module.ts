import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';
import { CursosDetallePageComponent } from './pages/cursos-detalle-page/cursos-detalle-page.component';

const routes: Routes = [
  {
    path: '',
    component: CursosPageComponent
  },
  {
    path: ':id',
    component: CursosDetallePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
