import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarPageComponent } from './pages/ingresar-page/ingresar-page.component';

const routes: Routes = [
  {
    path: '',
    component: IngresarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarRoutingModule { }
