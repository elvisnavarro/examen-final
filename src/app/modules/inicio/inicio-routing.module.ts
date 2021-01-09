import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncioPageComponent } from './pages/incio-page/incio-page.component';

const routes: Routes = [
  {
    path: '',
    component: IncioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
