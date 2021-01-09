import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorPageComponent } from './pages/administrador-page/administrador-page.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdministradorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
